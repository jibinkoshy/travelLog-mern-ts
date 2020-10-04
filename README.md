# Full Stack MERN Typescript Travel log

- A full stack application to store / list places you have traveled

![image](https://user-images.githubusercontent.com/20209497/95016391-5598ef80-0618-11eb-85e9-011bb3b7e53d.png)

![image](https://user-images.githubusercontent.com/20209497/95016353-19fe2580-0618-11eb-880c-25d77a95b2dc.png)

![image](https://user-images.githubusercontent.com/20209497/95016375-3f8b2f00-0618-11eb-98a6-4dd5077988a0.png)

# POSTMAN GET LogEntries

```
CURL *curl;
CURLcode res;
curl = curl_easy_init();
if(curl) {
  curl_easy_setopt(curl, CURLOPT_CUSTOMREQUEST, "GET");
  curl_easy_setopt(curl, CURLOPT_URL, "http://localhost:1337/api/logs");
  curl_easy_setopt(curl, CURLOPT_FOLLOWLOCATION, 1L);
  curl_easy_setopt(curl, CURLOPT_DEFAULT_PROTOCOL, "https");
  struct curl_slist *headers = NULL;
  curl_easy_setopt(curl, CURLOPT_HTTPHEADER, headers);
  res = curl_easy_perform(curl);
}
curl_easy_cleanup(curl);

```

![image](https://user-images.githubusercontent.com/20209497/94983984-25185f00-050d-11eb-8477-76b021e2c230.png)
