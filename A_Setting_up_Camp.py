import math


for _ in range(int(input())):
    a, b, c = map(int, input().split())
    temp = b % 3
    if (3 - temp) % 3 > c:
        print(-1)
        continue
    b += (3 - temp)
    c -= (3 - temp)
    print(a + b//3 + math.ceil(c/3))