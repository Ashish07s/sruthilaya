Sruthilaya Lead Form - Quick Start
---------------------------------

Files:
- index.html   -> main page
- styles.css   -> styling
- script.js    -> client JS (put your Google Apps Script URL here)
- script.gs    -> Google Apps Script to paste into Extensions -> Apps Script
- README.txt   -> this file

Setup steps:
1. Create a Google Sheet. Rename sheet tab to "Sheet1" (or change script.gs).
2. In the Sheet: Extensions -> Apps Script. Create a new project and paste script.gs.
3. Deploy -> New deployment -> Web app
   - Execute as: Me (your account)
   - Who has access: Anyone
4. Copy the Web App URL (looks like https://script.google.com/...) and paste it into script.js (replace PASTE_YOUR...).
5. Upload all files to Netlify / Vercel / GitHub Pages OR open index.html locally for quick testing.
6. Test form submission. New rows will append to the Google Sheet.

Security & notes:
- To avoid spam, later add reCAPTCHA or server-side validation.
- If hosting on a domain, consider restricting Apps Script calls by checking the origin inside script.gs.
- If you want I can deploy the Apps Script for you and paste the URL into script.js — reply "deploy script" and give the Google account email to use.
