#include<iostream>
using namespace std;
class A {
    public:
    void displayA(){
        cout<<"This is class A \n";
    }
};
class B : public A {
    public:
    void displayB(){
        cout<<"This is class B \n";
}
};
class C : public A {
    public:
    void displayC(){
        cout<<"This is class C \n";
}
};

int main(){
    S obj;
    obj.displayA();
    obj.displayB();
    obj.displayC();
    return 0;
}