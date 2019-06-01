import math 
import random
#fibinochi
def fib(prenum, num, times, start):
    if(times == start):
        print(num)
        print("Done!")
    else:
        print(num)
        fib(num, num + prenum, times, start + 1)

#times = input("What index of fibinochi do you want?")
#fib(0,1, times, 0)

#pi
circlec = [0.5,0.5]
numIn = 0;
x= 98999999

for i in range(x):
    dartX = random.random()
    dartY = random.random()
    if math.sqrt((circlec[0] - dartX)**2 + (circlec[1] - dartY)**2) <= 0.5:
        numIn = numIn + 1

print(numIn)
pi = (numIn/float(x)) * 4.0
print(pi)