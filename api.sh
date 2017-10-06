#!/bin/sh
#curl -u bob:secret -c cookie -H 'Content-Type:application/json' --request POST 'http://localhost:3000/login'
#curl -u bob:secret -b cookie -H 'Content-Type:applcation/json' --request GET 'http://ms.meritbuilders.com:3000/dialog/authorize?response_type=code&redirect_uri=/&client_id=1'
#curl -u djg@meritbuilders.com:aviation0227 -c cookie -H 'Content-Type:application/json' --request POST 'https://ms.meritbuilders.com/login'
#curl -u djg@meritbuilders.com:aviation0227 -b cookie -H 'Content-Type:applcation/json' --request GET 'https://ms.meritbuilders.com/dialog/authorize?response_type=code&redirect_uri=/&client_id=1'
curl -i -u jorodriguez1988@yahoo.com:123 -c cookie -H 'Content-Type:applcation/json' --request POST 'https://localhost:8443/api/login'
curl -i -u jorodriguez1988@yahoo.com:123 -b cookie -H 'Content-Type:applcation/json' --request GET 'http://localhost:8080/api/dialog/authorize?response_type=code&redirect_uri=/&client_id=1' | grep 'code'
curl -i -u jorodriguez1988@yahoo.com:123 -b cookie -H 'Content-Type:applcation/x-www-form-urlencoded' --request POST 'http://localhost:8080/api/oauth/token?client_id=1&client_secret=bebopcowboy1&grant_type=authorization_code'
# curl -i -u jorodriguez1988@yahoo.com:123 -b cookie -H 'Content-Type:applcation/json' --request GET 'https://ms.meritbuilders.com/api/employee'
