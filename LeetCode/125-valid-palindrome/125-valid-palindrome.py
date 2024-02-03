class Solution:
    def isPalindrome(self, s: str) -> bool:
        s = s.lower()
        s = re.sub('[^a-z0-9]', '', s)
        
        return s == s[::-1]

# Solution 2
#        s_list = []
#        for i in s:
#            if i.isalnum():
#                s_list.append(i.lower())
#        
#        while len(s_list) > 1:
#            if s_list.pop(0) != s_list.pop():
#                return False
#        
#        return True