def searchTree(title, children, matchingTitle):
    if title == matchingTitle :
        return title
    elif children != None:
        i = 0
        res = []
        while(i < len(children) and len(res) == 0):
            res.append(searchTree(children[i]), matchingTitle)
        return res
    return None