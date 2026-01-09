# Write a function that takes a string and compresses it by replacing consecutive 
# repeating characters with the character followed by the count. If compression doesn’t 
# reduce the length, return the original string.

#**Example:** `"aaabbcdd"` → `"a3b2c1d2"`

def compress_num (str_of_num):
    # Initialize and empty dictionary 
    seen = {}
    string_of_seen = ""

    for char in str_of_num:
        if char in seen:        
            seen[char] = seen.get(char, 0) + 1
        else:
            seen[char] = 1
        #string_of_seen += char

    for key in (seen.keys()):

        string_of_seen += key
        string_of_seen += str(seen[key])

    

    return string_of_seen

        

character = "aaabbcdd"
print(compress_num(character))