class: center, middle

# FLUENT

???

Robot voice: Fluent is a conference held by O'Reilly. It is held in San Francisco, CA. There were a lot of people there. It was cool. It is...

---

count: false
class: center, middle

# OMG

???

I learned so much. So this is my very rapidly thrown together mind vomit.

---

count: false
class: center, middle

# FLUENT

---

count: false
class: center, middle

# OMG

---


count: false
class: center, middle

# FLUENT

























---

count: true
class: middle

## 1. Extremely Common Technologies

---

layout: true

## 1. Extremely Common Technologies

---

count: false

.right-column[

- React

]

???

There was so much React. Talks that didn't even mention that they were using React were referencing their use of React. Oh, there were presentations on Angular 2, too... but they were **about** Angular 2. React was just **everywhere else**.


---

count: false

.right-column[

- React
	- Performance

_GET IMAGE OF PERFORMANCE METRICS_


]

???


And for good reason. React has bludgeoned its competitors to death on the performance scale.

(You might remember I mentioned using Mythril instead at a previous talk. Nope. Use React. Even it loses.)

---

count: false

.right-column[

- React
	- Performance
	- Reusability


]


---

count: false

.right-column[

- React
	- Performance
	- Reusability
		- Enhancing an existing page?


]


---

count: false

.right-column[

- React
	- Performance
	- Reusability
		- Enhancing an existing page?
		- Making a webapp from scratch?

]

---

count: false

.right-column[

- React
	- Performance
	- Reusability
		- Enhancing an existing page?
		- Making a webapp from scratch?
		- Making a static site?

_Show how?_

]

???

A static site? Rendered on the server?

Yeah. It's a thing.


---

count: false

.right-column[

- React
	- Performance
	- Reusability
		- Enhancing an existing page?
		- Making a webapp from scratch?
		- Making a static site?
- ES6 / ES2015 + Babel

]

???

Lots of code examples were just already in ES6, and many devs didn't feel the need to explain them. It's time to get up to future-date, it seems.






---

count: false

_Maybe insert some quick ES6 code snippets in here now_





---

count: false

.right-column[

- React
	- Performance
	- Reusability
		- Enhancing an existing page?
		- Making a webapp from scratch?
		- Making a static site?
- ES6 / ES2015 + Babel
	- Death to Coffeescript

]

???

Use Babel, compile your JS, and get the most coffee script-looking JavaScript ever right now.
















---

layout: false
count: true
class: middle

## 2. Progressive Offline Web Apps

---

layout: true

## 2. Progressive Offline Web Apps

---

count: false

.right-column[

- FlipKart's success

<iframe width="854" height="480" src="https://www.youtube.com/embed/m2tvYGCdOzs?start=666" frameborder="0" allowfullscreen></iframe>

]

???

Check out this full video later maybe. This company now has a mobile “app” that's actually just an offline-enabled webpage. It loads in under a second if the user returns to it, and not because it's cached.

---

count: false

.right-column[

- FlipKart's success
- Service Workers [Google - Your First Offline Web App](https://developers.google.com/web/fundamentals/getting-started/your-first-offline-web-app/)

]

???

Service Workers are Network Progressive Enhancement.

They can intercept requests and tell the browser to read the cache instead of going to the server. Hell, you don't even have to hit the network.

So now, if we use a Service Worker, and a metadata file, we can create a web app that starts its life in a tab and becomes progressively more applike.

---

count: false

.right-column[

- FlipKart's success
- Service Workers
- [PouchDB](https://pouchdb.com/)

]

???

This topic came up a lot. I have yet to really delve into the details on PouchDB, but it was mentioned by another talk about offline web apps. PouchDB is a database that runs inside the browser (meaning you can cache it) and it syncs back to the main database when it can (presumably CouchDB - which, incidentally, is what powers npm).

---

count: false

.right-column[

- FlipKart's success
- Service Workers
- PouchDB
- [Electron](http://electron.atom.io/)

]

???

So, if we're now considering the network to be progressive enhancement (the direction we should be going), why not take it a step further and pop that stuff into a desktop application? Enter Electron. Works great with PouchDB. Atom editor is built in it, as is Slack, as is VisualStudio, etc.

So now we're really getting into Universal JavaScript, and not just between the server and the Client, but also for desktop.

And we've seen various implementations attempt to get JavaScript-based applications packaged up all pretty for mobile devices, and so far, they've sucked. Cordova, et al. have speed issues.


---

count: false

.right-column[

- FlipKart's success
- Service Workers
- PouchDB
- Electron
- [React Native](https://facebook.github.io/react-native/)

]

???

Enter React Native.

It *mostly* becomes a native app. Apparently so far, developers of native apps are having better luck writing these than front-end devs are.

They're seeing great results though, and excitement seems to be building around it. This is a chance to share 70% of the code between Android, iOS devices, and your web app.


---

layout: true

## 1. Extremely Common Technologies

---

count: false

.right-column[

- React
	- Performance
	- Reusability
		- Enhancing an existing page?
		- Making a webapp from scratch?
		- Making a static site?
- ES6 / ES2015 + Babel

_Make sure you get whatever the final ES6 slide is for this_

]

???

So let's go back to our Common Technologies slide and give React some more props.

---

count: false

.right-column[

- React
	- Performance
	- Reusability
		- Enhancing an existing page?
		- Making a webapp from scratch?
		- Making a static site?
		- **Making a desktop application?**
- ES6 / ES2015 + Babel

_Make sure you get whatever the final ES6 slide is for this_

]

---

count: false

.right-column[

- React
	- Performance
	- Reusability
		- Enhancing an existing page?
		- Making a webapp from scratch?
		- Making a static site?
		- **Making a desktop application?**
		- **Making a native iOS or Android application?**
- ES6 / ES2015 + Babel

_Make sure you get whatever the final ES6 slide is for this_

]

???

So let's go back to our Common Technologies slide and give React some more props.

























---

layout: false
count: true
class: middle

## 3. Immutable Data Structures

---

layout: true

## 3. Immutable Data Structures

_Insert mind blown image_

---

count: false

.right-column[



]

???

Dear Christ people were excited about this.



























---

layout: false
count: true
class: middle

## 4. The State of Web Security

???

Hint: DISMAL

---

layout: true

## 4. The State of Web Security

---

count: false

.right-column[

- HOW CRAZY EASY IT IS TO FUCK YO SITE UP
- npm dependencies
- The SEIF Project

]


















---

layout: false
count: true
class: middle

## 5. Other Stuff

---

layout: true

## 5. Other Stuff

---

count: false

.right-column[

- npm commands
- webpack
- flatmap
- VR
- WebGL
- Architecture and Dev Ops
	- How to expand
	- How to not break shit
- Falcor
]
