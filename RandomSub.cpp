#include <iostream>
#include<random>
using namespace std;

int main(){
    //create a random number
    random_device rd;
    mt19937 gen(rd());
    uniform_int_distribution<>dist(0,11);

    int daysUntilExpiration=dist(gen);
    cout<<"days until expiration ="<<daysUntilExpiration<<endl;

    //check subscription status
    switch(daysUntilExpiration){
        case 0:cout<<"Your subscription is expired"<<endl;
        case 1:cout<<"your subscription will expires within a day ."<<"Renew now and save 20%"<<endl;
        break;
        case 2:
        case 3:
        case 4:
        case 5:cout<<"Your subscription will expire in "<<daysUntilExpiration<<"Renew now and save 10%!"<<endl;
        break;
        case 6:
        case 7:
        case 8:
        case 9:
        case 10:cout<<"Your subscription expires soon .Renew now!"<<endl;
        break;
        default :cout<<"Your subscription is active"<<endl;

    }
    return 0;
}