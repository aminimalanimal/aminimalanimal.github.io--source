class: center, middle

# FLUENT

???

Fluent is a conference held by O'Reilly. It is held in San Francisco, CA. There were a lot of people there. It was cool. It is...

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

---

count: false

.right-column[

- React

Used by:

.really-long-list[

- Airbnb
- Atlassian
- Automattic
- BBC
- Codecademy
- Dailymotion
- Docker
- Dropbox
- Facebook
- Feedly
- Flipkart
- HipChat
- IGN
- IMDb
- Imgur
- Instacart
- Instagram
- Khan Academy
- Lyft
- NHL
- Netflix
- NFL
- OkCupid
- Paypal
- Reddit
- Squarespace
- Tesla Motors
- The New York Times
- Uber
- Wordpress.com
- Yahoo

]

This [github wiki page](https://github.com/facebook/react/wiki/Sites-Using-React) lists every site, app, data visualization, and agency that says they're using React.



]

???

There was so much React. Talks that didn't even mention that they were using React were referencing their use of React. Oh, there were presentations on Angular 2, too... but they were **about** Angular 2. React was just **everywhere else**.

We aren't on the We Use React page yet.


---

count: false

.right-column[

- React
	- Performance

]

???

And for good reason. React rocks performance metrics.

---

count: false

.right-column[

- React
	- Performance

![](https://cdn.auth0.com/blog/newdombenchs/MajorGC.svg)


]

???

Angular 1 skews this one, so it's hard to compare the others. React is first on the list. VirtualDOM, IncrementalDOM (Google), and Mithril constantly compare favorably.

---

count: false

.right-column[

- React
	- Performance

![](https://cdn.auth0.com/blog/newdombenchs/Layout.svg)


]

???

I'm gonna rush through these.


---

count: false

.right-column[

- React
	- Performance

![](https://cdn.auth0.com/blog/newdombenchs/Paint.svg)


]

???

Painting time...

---

count: false

.right-column[

- React
	- Performance

![](https://cdn.auth0.com/blog/newdombenchs/droppedFrameCount.svg)


]

???

Frames that take longer than 16.6ms to be drawn can cause stuttering. This metric's for the subjective feeling of an application.

---

count: false

.right-column[

- React
	- Performance

![](https://cdn.auth0.com/blog/newdombenchs/Javascript.svg)


]

???

You get the idea. React's not the tip top of the tip top but it's consistently near the top in how it benchmarks between the different factors you could test for.

Also, no one's talking about IncrementalDOM or VirtualDOM or Mithril.

Seriously. No one.

So, fastest framework with a community built around it: React.



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
		- [Making a static site?](https://www.smashingmagazine.com/2016/03/server-side-rendering-react-node-express/)



]

???

A static site? Rendered on the server?

Yeah. It's a thing.

It's apparently a little tricky if you're trying to straight up statically render an existing site that wasn't set up for it, but if you know you're making a static site to begin with, this little code snippet

---

count: false

.right-column[

- React
	- Performance
	- Reusability
		- Enhancing an existing page?
		- Making a webapp from scratch?
		- [Making a static site?](https://www.smashingmagazine.com/2016/03/server-side-rendering-react-node-express/)

Instead of:

`React.render`

Use:

`ReactDOM.renderToString`

To handle data injection, use [React Resolver](https://github.com/ericclemmons/react-resolver).

]

???

is apparently all you really need.

---

count: false

.right-column[

- React
	- Performance
	- Reusability
		- Enhancing an existing page?
		- Making a webapp from scratch?
		- Making a static site?
- [ES6](https://github.com/lukehoban/es6features) / ES2015 + Babel

]

???

Lots of code examples were just already in ES6, and many devs didn't feel the need to explain them. It's time to get up to future-date, it seems.

I'm not going to hit even **most** of them.


---

count: false

.right-column[

- React
- ES6 / ES2015 + Babel
	- Arrows

<iframe width="854" height="480" src="https://www.youtube.com/embed/XRYN2xt11Ek?start=422" frameborder="0" allowfullscreen></iframe>

]

???

Arrows. Citi team knows about arrows. There's no skinny arrow, though. `this` is always transferred inside as though it's a Coffeescript fat arrow.

---

count: false

.right-column[

- React
- ES6 / ES2015 + Babel
	- Arrows
	- Classes

```
class SkinnedMesh extends THREE.Mesh {
  constructor(geometry, materials) {
    super(geometry, materials);

    this.idMatrix = SkinnedMesh.defaultMatrix();
    this.bones = [];
    this.boneMatrices = [];
    //...
  }
  update(camera) {
    //...
    super.update();
  }
  get boneCount() {
    return this.bones.length;
  }
  set matrixType(matrixType) {
    this.idMatrix = SkinnedMesh[matrixType]();
  }
  static defaultMatrix() {
    return new THREE.Matrix4();
  }
}
```

]

???

Classes - complete with `super` and `constructor`s.


---

count: false

.right-column[

- React
- ES6 / ES2015 + Babel
	- Arrows
	- Classes
	- Let + Const

```
function f() {
  {
    let x;
    {
      // okay, block scoped name
      const x = "sneaky";
      // error, const
      x = "foo";
    }
    // error, already declared in block
    let x = "inner";
  }
}
```

]

???

`let` is the new `var`. Both of these are scoped to their block. `const` can't ever be changed, which saves memory. (I saw way more `const` in the presenter's code than `let`.)

---

count: false

.right-column[

- React
- ES6 / ES2015 + Babel
	- Arrows
	- Classes
	- Let + Const
	- Promises

```
function timeout(duration = 0) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, duration);
    })
}

var p = timeout(1000).then(() => {
    return timeout(2000);
}).then(() => {
    throw new Error("hmm");
}).catch(err => {
    return Promise.all([timeout(100), timeout(200)]);
})
```
]

???

And **Promises**. Except that most talks that showed Promises actually talked about how _not great they are_.

Lots of complaining about `then` `then` `then`, which is better than callback hell, but apparently nowhere near as amazeballs as Observables.

---

count: false

.right-column[

- React
- ES6 / ES2015 + Babel
	- Arrows
	- Classes
	- Let + Const
	- ~~Promises~~ Observables

]

???

Observables are the new rage. And they aren't part of ES6. So... lets back up.


























---

layout: false
count: true
class: middle

## 2. Functional Reactive Programming

---

layout: true

## 2. Functional Reactive Programming

---

count: false

- Whatsit?

.large[

> Reactive programming is <br>programming with <br>asynchronous data streams.

]

---

layout: false
count: false
class: middle center

## HUH

---

layout: false
count: false
class: middle center

## WUT

---

layout: false
count: false
class: middle center

## HUH

---

layout: false
count: false
class: middle center

## WUT

---

layout: true

## 2. Functional Reactive Programming

---

count: false


.large[
<br>
What's an asynchronous data stream?

]

???

Basically, it just means you've subscribed to an event to receive data, and you don't necessarily know when that's going to show up, but you're open to having anywhere from 0 to infinite sets of data to show up via that subscription.

---

count: false

- Asynchronous Data Streams
- Observables

???

Observables aren't supported in a spec yet (they are submitted), but we can use them now with a variety of different JavaScript libraries, all of which pretty much owe their JavaScript origins to Rx.js.

Observables, as far as I can tell, turn the events that they receive into Arrays (documentation tends to refer to these as Collections, seems like the same thing to me).

---

count: false

- Asynchronous Data Streams
- Observables
	- So, who cares if they're arrays now?

???

Well, now that they're arrays, you can do all sorts of things to them.

---

count: false

- Asynchronous Data Streams
- Observables
	- `filter`, `map`, `flatmap`



???

flatmap transforms the items emitted by an Observable into Observables, then flattens the emissions from those into a single Observable


---

count: false

- Asynchronous Data Streams
- Observables
	- `filter`, `map`, `flatmap`
	- simple error handling, simple completion, simple canceling out

.right-column[

<iframe width="854" height="480" src="https://www.youtube.com/embed/XRYN2xt11Ek?start=866" frameborder="0" allowfullscreen></iframe>

]

???

The shortest video I have found to explain this is 40 minutes long, so I recognize that you aren't getting everything. I'm really aiming just to tease you into looking into this stuff more.

---

count: false

- Asynchronous Data Streams
- Observables

.right-column[

<iframe width="854" height="480" src="https://www.youtube.com/embed/XRYN2xt11Ek?start=1502" frameborder="0" allowfullscreen></iframe>

]

???

Let's check out a quick demonstration of the kinds of bullshit it saved Netflix, though.



























---

layout: false
count: true
class: middle

## 3. Immutable Data Structures

---

layout: true

## 3. Immutable Data Structures

---

count: false

.large[

> [Immutable Data Structures] go together with Reactive streams just like pancakes are good with syrup.

]

[jlongster.com/Using-Immutable-Data-Structures-in-JavaScript](http://jlongster.com/Using-Immutable-Data-Structures-in-JavaScript)

[facebook.github.io/immutable-js/](https://facebook.github.io/immutable-js/)

???

Guess who has an immutable javascript library?

Facebook. `immutable.js`


---

count: false

- The gist:
	- Data is immutable. It is never mutated in-place.
	- Changes to data are encapsulated into operations that take a previous version and return a new one.
	- History is represented as a list of states, with past on one end, the present on the other, and an index that can back up into ‘undo states’.
	- Modifying data causes any future states to be thrown away.

???

The data types used in Immutable programming are less computationally intensive to keep around than the native data types we have in JavaScript because they use “structural sharing.”

Think git. Git works in trees—it doesn't clone everything. It just constantly makes references to previous versions and branches out. That's what these data structures do.

They **are** slightly more computationally intensive than our JS objects though, _because_ we're keeping them around. However, they are **Significantly** less expensive than cloning, and supposedly, in practice, having these to reference can actually improve overall performance.

---

count: false

- The gist:
	- Data is immutable. It is never mutated in-place.
	- Changes to data are encapsulated into operations that take a previous version and return a new one.
	- History is represented as a list of states, with past on one end, the present on the other, and an index that can back up into ‘undo states’.
	- Modifying data causes any future states to be thrown away.
- The data types:
	- List, Stack, Map, OrderedMap, Set, OrderedSet and Record

???

If you come from a traditional programming background, or use Java, you probably know what these are. I have very vague interpretations of a few of them. Won't actually get into these right now, though.

---

count: false

- The gist:
	- Data is immutable. It is never mutated in-place.
	- Changes to data are encapsulated into operations that take a previous version and return a new one.
	- History is represented as a list of states, with past on one end, the present on the other, and an index that can back up into ‘undo states’.
	- Modifying data causes any future states to be thrown away.
- The data types:
	- List, Stack, Map, OrderedMap, Set, OrderedSet and Record
- [Elm (Stamps demo)](http://debug.elm-lang.org/edit/Stamps.elm)

???

But you can do really freaking cool things with them, like rewind moves made in a game.

(Elm, by the way, was also referenced. It's a completely different HTML/CSS/JS-in-one library that solely uses Immutable Data Types. Going to reference a demo written in it now.)

Rewinding your state comes free with Elm. It's apparently a trivial thing to do with JavaScript as well.

More practically, just be able to undo something. Your state is saved.



---

layout: false
count: false

<img src="assets/fry.jpg" style="width: 100%; height: auto;" />































---

layout: false
count: true
class: middle

## 4. Progressive Offline Web Apps

---

layout: true

## 4. Progressive Offline Web Apps

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
	- Arrows
	- Classes
	- Let + Const
	- ~~Promises~~ Observables

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
	- Arrows
	- Classes
	- Let + Const
	- ~~Promises~~ Observables

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
	- Arrows
	- Classes
	- Let + Const
	- ~~Promises~~ Observables

]















































---

layout: false
count: true
class: middle

## 5. The State of Web Security

???

Hint: DISMAL

---

layout: true

## 5. The State of Web Security

---

count: false

.right-column[

- HOW CRAZY EASY IT IS TO FUCK YO SITE UP

[OWASP - Top 10](https://www.owasp.org/index.php/Top_10_2013-Top_10)

]

???

Let's start with ZOMG Web Security is awful.

So, everytime some big site gets hacked, they're public response is “it was a really sophisticated attack.” Actually, that's pretty inaccurate. The thing is, our defenses just suck.

---

count: false

.right-column[

- HOW CRAZY EASY IT IS TO FUCK YO SITE UP
	- [CAPTCHA!](http://scraping.pro/8-best-captcha-solving-services-and-tools/)
		- Automated CAPTCHA Solvers
		- Paid services to solve CAPTCHAS

]

???

Captchas don't work. See, thing is, if there's money to be gained from hacking your site, there's money to be put into hacking your site.

They _pay_ people to solve Captchas. Work from home! Make up to X money per day!

The “I'm not a robot” is actually the best CAPTCHA. It still doesn't do anything, but it also bothers your users the least.

---

count: false

.right-column[

- HOW CRAZY EASY IT IS TO FUCK YO SITE UP
	- CAPTCHA!
		- Automated CAPTCHA Solvers
		- Paid services to solve CAPTCHAS
		- Phantom JS, SeleniumHQ, and [Sikuli Script](http://www.sikuli.org/)

]

???

Our favorite testing tools can be used to automate things at an operating system level. Sikuli Script was particularly interesting. You can tell it to WAIT until it sees a certain visual output, and then interact with it.

---

count: false

.right-column[

- HOW CRAZY EASY IT IS TO FUCK YO SITE UP
	- CAPTCHAs don't work
	- Single Attackers

]

???

Most hacks are done by a single individual.


---

count: false

.right-column[

- HOW CRAZY EASY IT IS TO FUCK YO SITE UP
	- CAPTCHAs don't work
	- Single Attackers
		- block their IP!
]

???

Usually one machine uses proxies to look like thousands of different users.


---

count: false

.right-column[

- HOW CRAZY EASY IT IS TO FUCK YO SITE UP
	- CAPTCHAs don't work
	- Single Attackers
		- ~~block their IP!~~
		- Detect exact browser dimensions, fonts on the system, or look for spikes coming from one machine
]

???

Nope. They have tools that specifically vary what browsers, dimensions, fonts... everything you could think of to vary. So we can't even do good predictions.

---

count: false

.right-column[

- HOW CRAZY EASY IT IS TO FUCK YO SITE UP
	- CAPTCHAs don't work
	- Single Attackers
		- ~~block their IP!~~
		- ~~Detect exact browser dimensions, fonts on the system, or look for spikes coming from one machine~~
		- Pay a security company

]

???

10 people for a year... you're looking at $1 million, and no real promise you'll block these people off.

---

count: false

.right-column[

- HOW CRAZY EASY IT IS TO FUCK YO SITE UP
	- CAPTCHAs don't work
	- Single Attackers
		- ~~block their IP!~~
		- ~~Detect exact browser dimensions, fonts on the system, or look for spikes coming from one machine~~
		- Pay a security company
		- Just pay them off

]

???

It's been done. They ask for 30k? That's cheap.

---

count: false

.right-column[

- HOW CRAZY EASY IT IS TO FUCK YO SITE UP
	- CAPTCHAs don't work
	- Single Attackers are hard to deal with
	- It's easy to get information to hack stuff
		- [YouTube](https://www.youtube.com/results?search_query=netflix+sentrymba) (your company name) fullz, sentrymba, carding, tutorial

]

---

count: false

.right-column[

- HOW CRAZY EASY IT IS TO FUCK YO SITE UP
	- CAPTCHAs don't work
	- Single Attackers are hard to deal with
	- It's easy to get information to hack stuff
		- YouTube fullz, sentrymba, carding, tutorial
		- Reddit
		- Forums

]

---

count: false

.right-column[

- HOW CRAZY EASY IT IS TO FUCK YO SITE UP
	- CAPTCHAs don't work
	- Single Attackers are hard to deal with
	- It's easy to get information to hack stuff
		- YouTube fullz, sentrymba, carding, tutorial
		- Reddit
		- Forums
		- [dumpmon](https://twitter.com/dumpmon?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor)

]

???

A twitter account that just constantly leaks usernames and passwords

---

count: false

.large[

> 92% of traffic for a major fortune 500 company comes from robots.

]

???

Sucks that 90% of your analytics are total crap.

30 million accounts stolen - Ashley Madison
50 million accounts stolen - Evernote
70 million accounts stolen - Sony breach

---

count: false

.right-column[

- HOW CRAZY EASY IT IS TO FUCK YO SITE UP
	- CAPTCHAs don't work
	- Single Attackers are hard to deal with
	- It's easy to get information to hack stuff
- What we _can_ do
	- Don't make yourself a target

]

---

count: false

.right-column[

- HOW CRAZY EASY IT IS TO FUCK YO SITE UP
	- CAPTCHAs don't work
	- Single Attackers are hard to deal with
	- It's easy to get information to hack stuff
- What we _can_ do
	- Don't make yourself a target. Don't:
		- Store currency

]

---

count: false

.right-column[

- HOW CRAZY EASY IT IS TO FUCK YO SITE UP
	- CAPTCHAs don't work
	- Single Attackers are hard to deal with
	- It's easy to get information to hack stuff
- What we _can_ do
	- Don't make yourself a target. Don't:
		- Store currency
		- Sell goods

]

---

count: false

.right-column[

- HOW CRAZY EASY IT IS TO FUCK YO SITE UP
	- CAPTCHAs don't work
	- Single Attackers are hard to deal with
	- It's easy to get information to hack stuff
- What we _can_ do
	- Don't make yourself a target. Don't:
		- Store currency
		- Sell goods
		- Have user generated content

]

---

count: false

.right-column[

- HOW CRAZY EASY IT IS TO FUCK YO SITE UP
	- CAPTCHAs don't work
	- Single Attackers are hard to deal with
	- It's easy to get information to hack stuff
- What we _can_ do
	- Don't make yourself a target. Don't:
		- Store currency
		- Sell goods
		- Have user generated content
		- Have time sensitive features

]

---

count: false

.right-column[

- HOW CRAZY EASY IT IS TO FUCK YO SITE UP
	- CAPTCHAs don't work
	- Single Attackers are hard to deal with
	- It's easy to get information to hack stuff
- What we _can_ do
	- Don't make yourself a target. Don't:
		- Store currency
		- Sell goods
		- Have user generated content
		- Have time sensitive features
		- Pay for digitally validated behavior

]

---

count: false

.right-column[

- HOW CRAZY EASY IT IS TO FUCK YO SITE UP
	- CAPTCHAs don't work
	- Single Attackers are hard to deal with
	- It's easy to get information to hack stuff
- What we _can_ do
	- Don't make yourself a target. Don't:
		- Store currency
		- Sell goods
		- Have user generated content
		- Have time sensitive features
		- Pay for digitally validated behavior
		- Have unique Personally identifiable information

]

???

I know damn sure that I'll be sticking with Facebook / Google username password authentication at the very least. Let them pay for it.


---

count: false

.right-column[

- HOW CRAZY EASY IT IS TO FUCK YO SITE UP
	- CAPTCHAs don't work
	- Single Attackers are hard to deal with
	- It's easy to get information to hack stuff
- What we _can_ do
	- ~~Don't make yourself a target~~
	- Make sure you don't have bad npm dependencies
		- [Synk](https://snyk.io/)

]

???

Part of a different presentation, Synk's pretty cool. They're an npm package that looks through your dependency lists and compares them to a database they keep of known dependency vulnerabilities. They'll tell you when you need to upgrade, when upgrades will break (via semantic versioning), and sometimes, they'll create their own patches for older versions if the fix is delivered by the author in a breaking version.

These guys showed off some gnarly stuff. They showed how, with an older version of mongoose, they were able to stall the server indefinitely via a `buffer` command.


---

count: false

.right-column[

- HOW CRAZY EASY IT IS TO FUCK YO SITE UP
	- CAPTCHAs don't work
	- Single Attackers are hard to deal with
	- It's easy to get information to hack stuff
- What we _can_ do
	- ~~Don't make yourself a target~~
	- Make sure you don't have bad npm dependencies
- The SEIF Project

]

???

tldr; Douglas Crockford wants to just reinvent the entire internet to try to address these issues.

He just, you know, needs to get a single browser manufacturer to implement the spec he's written, then get a large company who feels that it's not worth it to do business on the traditional web anymore to implement a version specifically for SEIF to route their customers to it, and then get those customers to use this specific browser.

Including QT to just redo HTML and CSS, 'cause why not while we're at it?



---

count: false

.right-column[

- HOW CRAZY EASY IT IS TO FUCK YO SITE UP
	- CAPTCHAs don't work
	- Single Attackers are hard to deal with
	- It's easy to get information to hack stuff
- What we _can_ do
	- ~~Don't make yourself a target~~
	- Make sure you don't have bad npm dependencies
- The SEIF Project
	- [seifnode](https://github.com/paypal/seifnode)

]

???

In the meantime, there's SEIFnode













---

layout: false
count: true
class: middle

## 6. Other Stuff

---

layout: true

## 6. Other Stuff

---

count: false

.right-column[

- npm commands
	- `npm --install --cache-min 999999`

]

???

This installs things only if you don't already have it. If you've EVER downloaded a certain dependency, it's already on your computer.
npm asks the server if there is something new, but if not, it uses your computer's version. This command goes straight for your computer's version.


---

count: false

.right-column[

- npm commands
	- `npm --install --cache-min 999999`
	- `npm shrinkwrap`

]

???

Lets you pin everything—every dependency—into exactly the version you are currently using.


---

count: false

.right-column[

- npm commands
	- `npm --install --cache-min 999999`
	- ~~`npm shrinkwrap`~~ npm-shrinkwrap

]

???

`npm-shrinkwrap` is written by Uber, and differs from intrinsic shrinkwrap.



---

count: false

.right-column[

- npm commands
	- `npm --install --cache-min 999999`
	- ~~`npm shrinkwrap`~~ npm-shrinkwrap
	- `npm prune`

]

???

gets rid of packages not specified in package.json.



---

count: false

.right-column[

- npm commands
	- `npm --install --cache-min 999999`
	- ~~`npm shrinkwrap`~~ npm-shrinkwrap
	- `npm prune`
	- `npm dedupe`

]

???

removes duplicates.



---

count: false

.right-column[

- npm commands
	- `npm --install --cache-min 999999`
	- ~~`npm shrinkwrap`~~ npm-shrinkwrap
	- `npm prune`
	- `npm dedupe`
	- `npm outdated`

]

???

 tells you what is currently outdated.



---

count: false

.right-column[

- npm commands
	- `npm --install --cache-min 999999`
	- ~~`npm shrinkwrap`~~ npm-shrinkwrap
	- `npm prune`
	- `npm dedupe`
	- `npm outdated`
	- `npm update`

]

???

used to be awful. now it only updates top-level dependencies.



---

count: false

.right-column[

- npm commands
- webpack

]

???

webpack is apparently a hard beast to tame. Everything that I read highly suggests using it, but it's got a very steep initial learning curve. Dude demoing this ending his presentation like, “it's awesome, but maybe don't use it if you don't need to.”

---




count: false

.right-column[

- npm commands
- webpack
- VR & WebGL

]

???

It's on its way. If you're insane, you can try learning three.js to code stuff by hand, but I have a feeling practical users will just be exporting content from Unity and Unreal engines, which already allow web export.


---


count: false

.right-column[

- npm commands
- webpack
- VR & WebGL
- Falcor vs GraphQL

]

???

Falcor is Netflix's client-database talker thing. It's pretty damn neat. It'll take queries from the client and grab them from the database, then store the results for faster reference on second request.

It's not appropriate for content that changes rapidly, though. Facebook's GraphQL is probably the better tool for that, though it is substantially more complicated apparently.



---


count: false

.right-column[

- npm commands
- webpack
- VR & WebGL
- Falcor vs GraphQL
- Architecture and Dev Ops
	- How to expand and not break stuff

]

???

Watched a few talks on this kind of thing, and ultimately, it comes down to “use Web Workers, use Docker, make simple APIs”.

