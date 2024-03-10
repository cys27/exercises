from sys import argv
from os import path
import re as RegEx
import urllib.request, urllib.error

if len(argv) > 3:
    print("Too many arguments!")
    exit()
elif len(argv) < 3:
    print("Please enter the required data.")
    exit()
else:
    del argv[0]
    keysAndVals = []
    for i in range(len(argv)):
        key = RegEx.search(r"(?<=\--)(.*?)(?=\=)", argv[i]).group()
        value = RegEx.search(r"[^=]*$", argv[i]).group()

        keysAndVals.append((key, value))

    # Check 2
    for ii in range(len(keysAndVals)):
        if ("target" in keysAndVals[ii] == False) or ("list" in keysAndVals[ii] == False):
            print("Please enter the required data!")
            exit()

    # Check 3
    listPath = ""
    for iii in range(len(keysAndVals)):
        # [(target, val), (list, val)]
        if keysAndVals[iii][0] != "list":
            target = keysAndVals[iii][1]
        else:
            if path.exists(keysAndVals[iii][1]) == False or path.splitext(keysAndVals[iii][1])[1] != ".txt":
                print("No way..! Please check your list file and its extension. Its must be .txt format.")
            else:
                listPath = keysAndVals[iii][1]

    testURLs = open(listPath, "r").read().split("\n")
    
    for iv in range(len(testURLs)):
        try:
            conn = urllib.request.urlopen(target + testURLs[iv])
        except urllib.error.HTTPError as err:
            if err.code != 404:
                print(f"{target} -> {err.code}")
        except urllib.error.URLError as err:
            print("Network Error!")
        else:
            print(f"{target + testURLs[iv]} -> 200")