ViturAI – Ethics Judge Chrome Extension
---------------------------------------

======================================================================
I. REQUIREMENTS
======================================================================

1. Notebook Environment
   - A device capable of running .ipynb files
   - Recommended: Google Colab or Jupyter Notebook

2. Ngrok Account
   - Sign up at https://ngrok.com
   - Retrieve your personal Auth Token from the Ngrok Dashboard

3. Google Chrome
   - Able to access chrome://extensions/
   - Developer Mode enabled

======================================================================
II. RUNNING THE BACKEND (recommend: Google Colab)
======================================================================

1. Open the file "LoadBE.ipynb" in your environment.
   IMPORTANT: Do not modify the notebook.

2. Run all cells in order.

3. When prompted in the logs, paste your Ngrok Auth Token.

4. After the model finishes loading, the notebook will output:

      Public API URL: https://xxxxx.ngrok-free.app

   This is your backend endpoint.

5. Copy the Public API URL. You will use it inside the extension.

======================================================================
III. INSTALLING THE CHROME EXTENSION
======================================================================

1. Open Chrome and go to:
      chrome://extensions/

2. Enable Developer Mode (top-right corner).

3. Click "Load unpacked".

4. Select the folder containing your extension files:
      - manifest.json
      - popup.html
      - popup.js
      - icons

5. The extension will now appear in your Chrome toolbar.

======================================================================
IV. USING THE EXTENSION
======================================================================

1. Click the ViturAI Ethics Judge icon in the Chrome toolbar.

2. In the popup window:
      - Paste the Public API URL into 
        "Tunnel URL (ngrok / cloudflare)"
      - Click "Save Tunnel URL"

3. Enter the Question/Scenario.

4. Enter the AI-generated Answer you want to evaluate.

5. Click "Evaluate Ethics".

6. The extension will display:
      - Scores for all five ethical dimensions (0–20)
      - Total score (0–100)
      - Ethics classification:
           Good Ethics (✓)
           Moderate Ethics (!)
           Bad Ethics (X)


======================================================================
V. NOTES
======================================================================

- Each new Colab session generates a new Ngrok URL.
  You must paste the new URL into the extension.

- The backend must remain running for the extension to work.

- This project is intended for research and demonstration use.

