# Next.js workshop boilerplate

Based on following libraries:

 - Next.js
 - styled-components
 - jest
 - graphql-request

[Finished project](https://github.com/stlk/next-workshop)


### Links

https://kiwi-graphql-voyager.now.sh - schema

<a href="kiwi-graphiql.now.sh/?query=%20%20%7B%0A%20%20%20%20%20%20allFlights(first%3A%201%2C%20search%3A%20%7Bfrom%3A%20%7Blocation%3A%20%22Prague%22%7D%2C%20to%3A%20%7Blocation%3A%20%22Warsaw%22%7D%2C%20date%3A%20%7Bexact%3A%20%222017-10-25%22%7D%7D)%20%7B%0A%20%20%20%20%20%20%20%20edges%20%7B%0A%20%20%20%20%20%20%20%20%20%20node%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20id%0A%20%20%20%20%20%20%20%20%20%20%20%20departure%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20time%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20localTime%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20arrival%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20time%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20localTime%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20legs%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20flightNumber%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20departure%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20airport%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20name%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20city%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20name%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20arrival%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20airport%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20name%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20city%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20name%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20duration%0A%20%20%20%20%20%20%20%20%20%20%20%20airlines%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20name%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20price%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20amount%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20currency%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D&operationName=null" target="_blank">kiwi-graphiql.now.sh</a> - playground