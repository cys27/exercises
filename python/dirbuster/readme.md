<h1 align="center">Check if the url exist</h1>
A simple version of <a href="https://www.kali.org/tools/dirbuster/">dirbuster</a> in Kali Linux.

## Usage
```bash
python app.py --target=<url> --list=<list_path>
```
You need to specify the target and list parameters required for it to work smoothly. In example;

```
python app.py --target=https://google.com/ --list=urllist.txt
```

urllist.txt
```
/robots.txt
/index.html
/login.php
/test123
/login.html
/app.php
/sitemap.xml
```
> [!IMPORTANT]
> There must be a slash character at the beginning of the URL addresses in the list file. And the extension of the list file must be txt format.

Output
```
https://google.com/robots.txt -> 200
https://google.com/index.html -> 200
https://google.com/sitemap.xml -> 200
```