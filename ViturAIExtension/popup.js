const tunnelUrlInput = document.getElementById("tunnelUrl");
const saveUrlBtn = document.getElementById("saveUrlBtn");
const evaluateBtn = document.getElementById("evaluateBtn");
const resultDiv = document.getElementById("result");

// Load saved URL when popup opens
chrome.storage.local.get(["tunnelUrl"], (data) => {
  if (data.tunnelUrl) {
    tunnelUrlInput.value = data.tunnelUrl;
  }
});

// Save new tunnel URL
saveUrlBtn.addEventListener("click", () => {
  let url = tunnelUrlInput.value.trim();

  if (!/^https?:\/\//i.test(url)) {
    resultDiv.textContent = "⚠️ Invalid URL! Must start with http(s)://";
    return;
  }

  // chuẩn hoá: bỏ dấu / ở cuối
  url = url.replace(/\/+$/, "");

  chrome.storage.local.set({ tunnelUrl: url }, () => {
    resultDiv.textContent = "✅ Tunnel URL saved!";
  });
});

// Nối endpoint /judge an toàn (tránh //judge)
function joinJudgeUrl(base) {
  return `${base.replace(/\/+$/, "")}/judge`;
}

// Call backend API
async function callEthicsAPI(baseUrl, question, answer) {
  const endpoint = joinJudgeUrl(baseUrl);

  const response = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      question: question,
      ai_answer: answer
    })
  });

  if (!response.ok) {
    throw new Error(`HTTP ${response.status}: ${await response.text()}`);
  }

  return response.json();
}

// Evaluate button
evaluateBtn.addEventListener("click", () => {
  const question = document.getElementById("question").value.trim();
  const answer = document.getElementById("answer").value.trim();

  chrome.storage.local.get(["tunnelUrl"], async (data) => {
    const apiUrl = (data.tunnelUrl || "").trim();

    if (!apiUrl) {
      resultDiv.textContent = "⚠️ Please enter and save a Tunnel URL first!";
      return;
    }

    if (!question || !answer) {
      resultDiv.textContent = "⚠️ Please enter both Question and Answer!";
      return;
    }

    resultDiv.textContent = "⏳ Evaluating...";

    try {
      const res = await callEthicsAPI(apiUrl, question, answer);

      const scoreLines = Object.entries(res.scores || {})
        .map(([k, v]) => `• ${k}: ${v}/20`)
        .join("\n");

      resultDiv.textContent =
        `📊 Scores:\n${scoreLines}\n\n` +
        `🎯 Total Score: ${res.total_score}/100\n` +
        `⚖️ Ethics Level: ${res.ethics_level}`;
    } catch (err) {
      resultDiv.textContent = "❌ Error: " + err.message;
    }
  });
});
