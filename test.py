x = 10;

def scopes1():  
    x = x + 5
    print(x)

def scopes2():
    y = x + 5
    print(y)

def scopes3(): 
    y = x + 5
    x = 15
    print(y)

scopes2()