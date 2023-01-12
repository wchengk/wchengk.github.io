#include <stdio.h>
#include <stdlib.h>
#include <string.h>
int main(){
    system("ip addr list en0 > /tmp/ipv6addr");
    freopen("/tmp/ipv6addr","r",stdin);
    char row[256];
    char tmp[256];
    char tmp2[256];
    while (fgets(row,256,stdin)){
        sscanf(row,"%s%s",tmp,tmp2);
        if (strcmp(tmp,"inet6"))continue;
        for (int i = 0;tmp2[i];i ++)
            if (tmp2[i] == '/')tmp2[i] = 0;
        if (tmp2[0] == 'f' && tmp2[1] == 'e')continue;
        if (tmp2[0] == 'f' && tmp2[1] == 'd')continue;
        printf("%s",tmp2);
        break;
    }
    return 0;
}