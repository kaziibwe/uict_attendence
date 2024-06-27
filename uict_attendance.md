



# API TO LOGIN ADMIN

# Endpiont
https://workplan.uict.ac.ug/api/auth/adminlogin

# Payload
{

    "email":"alfredkaziibwe19@gmail.com",
   
    "password":"123456"
}


# Output

{
  "access_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL3dvcmtwbGFuLnVpY3QuYWMudWcvYXBpL2F1dGgvYWRtaW5sb2dpbiIsImlhdCI6MTcxOTUwMjIzMCwiZXhwIjoxNzE5NTA1ODMwLCJuYmYiOjE3MTk1MDIyMzAsImp0aSI6IlR2MFpzUDlxTlBOZVl3cUIiLCJzdWIiOiIxIiwicHJ2IjoiZGY4ODNkYjk3YmQwNWVmOGZmODUwODJkNjg2YzQ1ZTgzMmU1OTNhOSJ9.QTZHRp3Ls7dJSJUkTG8yYoiSAKIym7twJ-_o64L3TdI",
  "token_type": "bearer",
  "expires_in": 3600,
  "user": {
    "email": "alfredkaziibwe19@gmail.com",
    "role": null,
    "phone": "0785557587",
    "name": "Kansiime Alfred",
    "location": null,
    "sex": null
  }
}


# API TO CREATE ATTENDANCE

# Endpoint 
http://127.0.0.1:8000/api/auth/createAttendance

# Payload

{
      "user_id": "3"
    
}

# Output

{
  "attendance": {
    "user_id": "3",
    "status": "On site",
    "singin": "2024-06-27 15:25:09",
    "id": 15
  },
  "status": true
}


# API TO UPDATE THE  ATTENDANCE

# End Point
https://workplan.uict.ac.ug/api/auth/updateAttendance/2

#  Payload

{
  "user_id": "2"
    
}

# Output
{
  "attendance": 1,
  "status": true
}