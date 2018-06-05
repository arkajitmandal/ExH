function testFunction(n){
    var a = (sumOfFunction(0,n,function(m){return(m)}));
    console.log(a);
}

//function A is a function of n and p
function A(n,p){
    
    var a = (factorial(n)*Math.pow(Math.E,-p)/(Math.pow(p,n+1))*(sumOfFunction(0,n,function(m){return (Math.pow(p,m)/factorial(m))})));
    return a;

}
//function B is a function of n and p
function B(n,p){

    //two conditions, wether or not p is zero makes a difference in the result.
    if (p = 0){
        return (Math.pow(-1,n+1)*(A(n,-p)-A(n,p)));
    }
    else {

        return(((1)/(1+n))*(1+Math.pow(-1,n)));

    }
}

function F(m,N,Nd){
    sigma = (1/2)*((m-N)+Math.abs(m-N));
    min = min(m,Nd);
    return sumOfFunction(min,sigma,function(s){ return Math.pow(-1,s)*binomial(N, m-s)*binomial(Nd,s)});
}
function D(beta,l,lambda){
    return ((Math.pow(-1,(l-beta)/(2)))/(Math.pow(2,l)))*(Math.pow(((((2*l)+1)/(2))*((binomial(l + lambda, l))/((binomial(l ,lambda)))),(1/2)))*(binomial(l,(l-beta)/(2)))*(binomial(l+beta,beta-lambda)));
}
function min(x,y){
    if (x>y){
        return y;
    }
    else {
        return x;
    }
}


//function G, takes in a_,b_, l1_,a1_,l2_ as parameters and returns the result.
function G(a_,b_, l1_,a1_,l2_){

var result = sumOfFunction(0,a1_, function(i){Math.pow(-1,i)*binomial(a1_,i)*D(a_+2*a1_-2*i,l1_,a1_)})*D(b_,l2_,a1);
    return result;
}






function factorial(num){
    if (num < 0){
        return -1;
    }

    else if (num = 0){
        return 1;
    }
    else {

        return (num * factorial(num -1));
    }
}

//function that performs sigma notation sums, takes in start and end and an anonymous function as input;
function sumOfFunction(start, end, sigmaFunction){
    var sum = 0;
    

    console.log(sigmaFunction);
    for (var i = start; i <= end; i++){
        sum += (sigmaFunction(i));
    }
    return sum;
}

function binomial(a, b) {
    numerator = factorial(a);
    denominator = factorial(a-b) *  factorial(b);
    return numerator / denominator;
  }