# Full Stack MERN Typescript Travel log

- A full stack application to store / list places you have traveled

![image](https://user-images.githubusercontent.com/20209497/94983958-d1a61100-050c-11eb-98bc-4ab54a819964.png)

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
