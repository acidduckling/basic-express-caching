# Caching example in Express

by adding the **Cache-Control** header, we can set the browser to cache the content for a specified time.

The **ETag** header is also added by Express with a hash value, which is updated when the content of the served file is changed. If the contentis unchanged, a server response code of **304 Unmodified** is returned.