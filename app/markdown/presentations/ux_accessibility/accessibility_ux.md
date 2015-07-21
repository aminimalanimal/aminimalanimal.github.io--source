class: center, middle inverse

# Accessibility for UX

---

class: middle inverse
layout: false

## Intro

???

Welcome to Accessibility for UX. My name is James Curd.

---

count: false
class: middle inverse
layout: false

## Intro **to James**

???

I'm a presentation layer engineer here at the Austin office. I've worked here for about two years on the {{client name}} account.


---

count: false
class: middle inverse
layout: false

## Intro to James' **Client Account**

???

{{Client name}} recently revamped their entire website. One of the driving factors behind the rewrite was to make it accessible.


---

count: false
class: middle inverse
layout: false

## Intro to James' Client Account's **Fear**

???

There is an increasing fear that the government will adopt an open-standards spec called the WCAG


---

count: false
class: middle inverse
layout: false

## Intro to James' Client Account's Fear of the **WCAG 2.0**

???

—that is, the Web content accessibility guidelines— 2.0 as it's official standard for compliance with the Americans with Disabilities Act



---

count: false
class: middle inverse
layout: false

## Intro to James' Client Account's Fear of the **ADA**

???

which passed in 1990. The ADA prevents discrimination based on disability, and in recent years many companies that have functionality deemed to be universal enough to be a public service—such as banks, airlines, universities, government websites, states—have found themselves under pressure to offer their services and their websites to everyone,

---

count: false
class: middle inverse
layout: false

## Intro to James' Client Account's Fear of **Being Sued**

???

lest they be sued.

---

count: false
class: middle inverse
layout: false

## Intro to **James again**

???

So, my primary focus so far at Razorfish has been Web accessibility... but bear in mind that the takeaways here apply to everything.

---

count: false
class: middle inverse
layout: false

## Intro to **Accessibility**

???

The ADA is why we have handicapped parking spots, wheelchair ramps, Braille in elevators, walk signs that beep and talk to you. Our public spaces have adjusted their layout, their design, and their behavior in order to be more universally accessed.

---

count: false
class: middle inverse
layout: false

## Intro to **Web** Accessibility

???

The web is no different.



---

count: false
class: middle inverse
layout: false

## Intro to Web Accessibility: **The Basics**



---

count: false
class: middle inverse
layout: false

## Intro to Web Accessibility: The Basics: **Our Users**

???

Let's start by going over who our users are. 


---
class: center middle inverse
layout: false

## _Let's get inclusive_






---
name: personas
class: inverse
layout: true


.left-column[

## Our Users

[Aegis Personas](http://www.aegis-project.eu/index.php?option=com_content&view=article&id=63&Itemid=53)

[A Web for Everyone - Personas](https://uxmag.com/articles/book-excerpt-a-web-for-everyone)

]




---

.right-column[

### Blindness

- likely to use a screen reader
	- possible keyboard-only navigation
	- need labelled graphics
	- need semantic markup
- issues with understanding visual context and clues

]

???

I've included a couple of different links to personas on the left-hand bar. If you want fully fleshed out personas, you can look for them there. This entire presentation is online at aminimalanimal.github.io/presentations/UX_accessibility/index.html.


--
count: false

.right-column[

### Low Vision

- may use screen readers
- may use zooming tools
- may use high contrast display modes
- issues with understanding visual context and clues

]

???

I separated the categories here for blindness and low vision to point out the both of these groups use screen readers. Because many of our users will have low vision, it's important that they experience that blind people have is one-to-one with what sighted people have. Any discrepancy between that one to one to experience results in potentially confusing circumstances.

---
template: personas
count: false

.right-column[

### Motor Disabilities


- may use keyboard-only navigation
- may use swipe-based navigation like iOS VO
- may use voice input

]

???

We design for iPhones, computers, tablets, video game consoles, displays in a mall or airport, etc, and so we're getting used to thinking about designing for mice and fingers and gestures.

We also need to design for for users who are accessing the computer only through a keyboard, relying solely on browser-based navigation like the tab key and up and down arrows.

> Users with motor impairments are more likely to use only a mouse, only a keyboard, voice or other inputs to control and navigate the web. Websites developed with flexibility of input options are more accessible to these individuals. Requiring mouse-only or keyboard-only control will create a barrier for some of these individuals.

--
count: false

.right-column[

### Deafness and Difficulty Hearing

- needs closed-captioning for video that has audio
- needs transcripts for audio-only content

]


--
count: false

.right-column[

### Cognitive Disabilities

- need consistent navigation structure
- need simple presentation
- **no confusing or overwhelming flickering or strobing effects**

]

???

And we need to care for users with cognitive disabilities. We need to make sure the that language that we use is understandable—the lower the grade-point level of writing, typically, the better.

> User with cognitive impairment rely on consistent navigation structure. Overly complex presentation, flickering or strobing designs can be confusing to these users.
















---
class: middle inverse
layout: false

## The tenants of accessible design: **POUR**






---
template: pour
class: inverse
layout: true

.left-column[

## POUR

[MIT - UX Accessibility Guidelines](https://ux.mit.edu/accessibility/guidelines)

]


---


.right-column[

### Perceivable

_Content is Perceivable in multiple ways_

- Audio content is captioned for those that cannot perceive the audio through hearing alone
- Text alternatives are provided for non-text content
- Keyboard users understand where their focus is placed

]

???

You need to make sure that users can perceive our website. They need to understand where they're focused. They should understand what elements are, that they understand when an error has taken place.

The first tenant of accessible design is that you provide multiple ways to perceive everything. Now that's not as hard as it sounds. It actually just means that if you have a picture, you give it alt text. If you have an input, it's actually coded as an input, that way when a user uses a screen reader, they can hear that it is an input.


--
count: false

.right-column[

### Operable

_Content is Operable by multiple means_

Whether you're on keyboard only, touchscreen, etc, **it's gotta work**.

- All functionality is available through the keyboard only
- Users can navigate and find information easily

]


---
count: false

.right-column[

### Understandable

_Content is Understandable_

- Text is readable and understandable
- Content appears and is operable in **predictable** ways
- Users shouldn't have to navigate back and forth to understand context

]



--
count: false

.right-column[

### Robust

_Offerings are Robust across multiple platforms_

- Site interacts with standard mobile devices and assistive technologies

]










---
class: center middle inverse
layout: false

## _Seems easy enough._

---
count: false
class: center middle inverse

## _Right?_

???

(sigh hard) _A thousand sighs_

---
count: false
class: center middle inverse

## _Oh._

???

It's a challenge, definitely.

After a deeper look at the tools our users are using, you'll start to understand why this is difficult.





---
class: middle inverse
layout: false

## Introduction to **Screen Readers**

???

First, let's get acquainted with Screen Readers.


---

template: screenreaders
class: inverse
layout: true

.left-column[

## Screen Readers

]


---

.right-column[

### Desktop

- OS X VoiceOver
- NVDA (NonVisual Desktop Access)
- JAWS (Job Access With Speech)
- Window-Eyes
- ChromeVox
- and many, many more!

]

???

The most popular desktop screen readers are JAWS, NVDA, and VoiceOver. JAWS is Windows-only and costs $1000 unless subsidized, so you can imagine that it doesn't get a ton of support when testing. We've done nearly everything in NVDA and VoiceOver, since NVDA is donation-based and VoiceOver comes with the Mac.

VoiceOver and NVDA provide some surprisingly different experiences, and attempting to keep them both happy is nearly impossible. This is the Wild West of the internet right now.

I've never used Window-Eyes or ChromeVox.

--
count: false

.right-column[

### Mobile

- iOS VoiceOver
- Google Talkback
- and many more!

]

???

iOS VoiceOver by far has the bigger share of users here. Until iOS 8, it was a really solid screen reader. We've got our fingers crossed that iOS 9 brings it back to it's previous greatness.

8 just... completely dropped the ball for accessibility.

TalkBack is specifically for Android, and it's got it's quirks, too. None of these are perfect, which makes for some frustrating times.






---
class: middle inverse
layout: false

## OS X VoiceOver: _The Experience_

To turn on:

1. `command` + `F5`
1. go through the tutorial if it pops up

VoiceOver can:

- navigate from element to element by using `control` + `option` + left or right arrow
- navigate by element type
- go into QuickNav mode by pressing both left and right arrows at the same time, then navigate by pressing left or right
- and so much more!



???

(Turn on VoiceOver and read the page)


---
class: middle inverse

## iOS VoiceOver: _That Tiny Screen From Far Away_

To enable iOS VoiceOver:

1. turn on in Settings
1. triple-tap to start

iOS VoiceOver's experience:

- swipe from element to element
- navigate by types of elements
- point at elements
- double-tap to click on elements

???

Since I have the ability to point directly at elements on iOS, things have to be what they actually are. Stylistic hacks that cover up the elements the user is interacting with just don't work here—it prevents the real element from being percievable and operable.

NVDA gives the user the ability to hear items they're hovering over as well, even though it's a desktop screen reader, it's not limited to the keyboard.




---
class: middle inverse
layout: false

## How to Make Screen Readers **Happy**



---
class: middle inverse
layout: false

## Use Landmarks and Headings

Users generally rely on headings and landmarks to scan the page.

- landmarks allow them to jump from area to area
	- In OS X VoiceOver, press left and right arrow together to turn on QuickNav, then press up and left arrows to cycle through webspots, then press up or down to navigate to web spots of your choice
- `control` + `option` + `command` + `h` allows users to jump to the next heading


---
template: landmarksandheadings
class: middle inverse
layout: true

.left-column[

## Landmarks and Headings

]

---
count: false

.right-column[

### Types of Landmarks

- banner (header, **only one**)
- search
- navigation
- main (**only one**)
- complementary
- contentinfo (footer, **only one**)

In addition to these landmarks, it can be helpful if we **label them** based on something on the page so that when the user jumps to that section, they hear what it is.

<a href="/" target="_blank">Demo</a>

]


---
count: false

.right-column[

### How Heading Levels Work

_Like your family tree (presumably)_

Headings form a tree starting at `h1`. Headings that are nested deeper are considered _within_ the previous heading's section, and cannot skip heading levels.

![Diagram of Heading Level Tree](/assets/images/presentations/heading_level_tree.svg)

]


???

There is generally only one `h1`.

So, this would be read `h1` > `h2` > `h3`> `h4`> `h5`> `h6` > back up to the second h3 and back down again.

---
class: center middle inverse
layout: false

## And Now, it's Time for **Good Idea**, _Bad Idea_

???

So, I defaulted to this because I had a lot of disparate things to say and needed _some_ form of structure. Not all of these bad ideas are equally awful.


---
class: middle inverse
layout: false

## **Good Idea:** Craft a Linear Experience

- element order, within a module/component, should be arranged left-to-right top-to-bottom (assuming it's an English page)
- information that's necessary to the user should be presented in a logical and upfront manner.



---
class: middle inverse

## _Bad Idea:_ Provide Important Information Out of Order

<form class="demo">
	<div class="field">
		<div class="label_container">
			<label class="label" for="input_1">Name</label>
		</div>
		<div class="input_container">
			<input class="input" type="text" id="input_1">
		</div>
	</div>
	<div class="field">
		<div class="label_container">
			<label class="label" for="input_2">Mobile Phone Number</label>
		</div>
		<div class="input_container">
			<input class="input" type="text" id="input_2">
		</div>
	</div>
	<button type="button">Submit</button>
	<small>Your mobile phone number is not required. If you give us your mobile phone number, we'll sell it to our partners and they will call you. So much.</small>
</form>

???

Close your eyes and walk through this. Did you have all the information you needed to have to make a sound judgement on whether or not to submit this form?


---
class: middle inverse

## _Bad Idea:_ Inconsistently Deviate from Left-to-Right

In both of these cases, the user will land on Submit first, but it is confusing when the Submit button is on the right side and breaks from a general rule of navigating left-to-right.

<form class="demo">
	<div class="field">
		<input type="checkbox" id="deviate_left-to-right_check_1">
		<label class="label" for="deviate_left-to-right_check_1">Accept the Conditions.</label>
	</div>
	<div class="right-to-left">
		<button type="button">Submit</button>
		<button type="button">Cancel</button>
	</div>
</form>

<form class="demo">
	<div class="field">
		<input type="checkbox" id="deviate_left-to-right_check_2">
		<label class="label" for="deviate_left-to-right_check_2">Accept the Conditions.</label>
	</div>
	<div class="left-to-right">
		<button type="button">Submit</button>
		<button type="button">Cancel</button>
	</div>
</form>


???

The temptation to do this occurs when we start collapsing content into a single column. Say you want that Submit button on the right in _most_ cases, but want it first on the phone. 



---
class: middle inverse
layout: false

## **Good Idea:** Provide a one-to-one experience




---
class: middle inverse

## _Bad Idea:_ Hide Content Solely for Screen Reader Users

Everything important (non-decorative) you are able to see, you should be able hear and touch or hover over.

.visuallyhidden[

Hiding content for screen readers only can be dangerous. Not only did we not expect to hear this at all, but iOS users could miss this content entirely if they aren't swiping from element to element. That goes against the Understandable and Percievable tenants of POUR.

]

Nearly everything you hear should have a visible on-page component that's related to it. An X icon may say "Close", an image may be described, an icon may tell you what it is without the words present on the page, but the user should understand what visible object is being read to them. ![Winking Smiley Face](/assets/images/presentations/winking_emoji.png)

???

(Turn on VO and read through this page)

(after)

So what just happened there is I used a CSS technique to completely hide a passage of text from sighted users. This is a pattern that we started adopting when we realized that we could explain things to screen readers that the visual design just wouldn't allow us to explain to sighted users. Ultimately, the best practice is just to not put yourself in a position in which you feel you need that sort of thing.

It's likely that this hidden content will be missed in future CMS updates, or that it was never integrated at all.






---
class: middle inverse

## **Good Idea:** Manage Focus Only When Necessary

It's really nice to be able to look around the page as much as we want, isn't it? Leaving focus alone ensures screen reader users can do that, too.

Now and then, we'll send the user to a modal. When that happens and the page gets an overlay placed on top, it's nice to bring them along with us. This is one of the few times we actually want to manage their focus.

---
class: middle inverse

## _Bad Idea:_ Create Focus Traps

<form class="demo">
	<input class="input" type="text" role="search" onfocusout="event.target.focus();" id="search_focus_trap_example" placeholder="Search...">
	<ul>
		<li><a href="#">First Result</a></li>
		<li><a href="#">Second Result</a></li>
		<li><a href="#">Third Result</a></li>
		<li><a href="#">Fourth Result</a></li>
	</ul>
</form>

???

We thought it'd be really cool to start them out in the search field and then not let them leave, 'cause the whole point is just filtering search results, right? **Super Convenient UX!**


---
class: middle inverse

## _Bad Idea:_ Redirect Focus Instantly and Unexpectedly

<form class="demo">
	<div class="field">
		<fieldset>
			<legend>Phone Number</legend>
			<label class="visuallyhidden" for="awful_focus_management_example_input_1">Area Code</label>
			<label class="visuallyhidden" for="awful_focus_management_example_input_2">Prefix</label>
			<label class="visuallyhidden" for="awful_focus_management_example_input_3">Last 4 Digits</label>
			<div class="input_container">
				<input class="awful_focus_management_example input" type="text" id="awful_focus_management_example_input_1" maxlength="3" onKeyup="var t = event.target; if (t.value.length >= 3) {$(t).next().focus();}">
				<input class="awful_focus_management_example input" type="text" id="awful_focus_management_example_input_2" maxlength="3" onKeyup="var t = event.target; if (t.value.length >= 3) {$(t).next().focus();}">
				<input class="awful_focus_management_example input" type="text" id="awful_focus_management_example_input_3" maxlength="4">
			</div>
		</fieldset>
	</div>
</form>

---
class: middle inverse

## **Good Idea:** Obvious Focus States

They're required! Embrace these. Make them cool!

<form class="demo">
	<div class="field">
		<div class="label_container">
			<label class="label" for="input_1">Name</label>
		</div>
		<div class="input_container">
			<input class="input" type="text" id="input_1">
		</div>
	</div>
	<div class="field">
		<div class="label_container">
			<label class="label" for="input_2">Mobile Phone Number</label>
		</div>
		<div class="input_container">
			<input class="input" type="text" id="input_2">
		</div>
	</div>
</form>


---
class: middle inverse

## _Bad Idea:_ No Focus States or Hard-to-See Focus States

<form class="demo">
	<div class="field">
		<div class="label_container">
			<label class="label" for="input_1">Name</label>
		</div>
		<div class="input_container">
			<input class="" type="text" id="input_1">
		</div>
	</div>
	<div class="field">
		<div class="label_container">
			<label class="label" for="input_2">Mobile Phone Number</label>
		</div>
		<div class="input_container">
			<input class="" type="text" id="input_2">
		</div>
	</div>
</form>


---
class: middle inverse

## **Good Idea:** Using Color to Enhance What is Already Visible

This:

.demo[

<h3 class="marginless bar_red"><em>Bad Idea:</em> Using <code>tabindex</code> on all the things!</h3>

]

Is still decent as:

.demo[

<h3 class="marginless bar_grey"><i>Bad Idea:</i> Using <code>tabindex</code> on all the things!</h3>

]




---
class: middle inverse

## _Bad Idea:_ Using Color as the Only Means of Conveying Information

This:

.demo[

<h3 class="marginless bar_red">Using <code>tabindex</code> on all the things!</h3>

]

May be seen as:

.demo[

<h3 class="marginless bar_grey">Using <code>tabindex</code> on all the things!</h3>

]

???

Let's say you're colorblind. Can you tell if this example is a good idea or a bad idea?



---
class: middle inverse

## **Good Idea:** Meet Color Contrast Standards for Text

Text needs to have a contrast ratio of 4.5:1. Large-scale text, 3:1.

Logos, decorative text, and text that belongs to inactive UI components have no contrast requirement.

???

The visual presentation of text and images of text has a contrast ratio of at least 4.5:1, except for the following: (Level AA)
Large Text: Large-scale text and images of large-scale text have a contrast ratio of at least 3:1;
Incidental: Text or images of text that are part of an inactive user interface component, that are pure decoration, that are not visible to anyone, or that are part of a picture that contains significant other visual content, have no contrast requirement.
Logotypes: Text that is part of a logo or brand name has no minimum contrast requirement.


---
class: middle inverse

.poor_contrast[

<h2><i>Bad Idea:</i> This</h2>



]


---
class: middle inverse

## _Bad Idea:_ Give Users Seizures

.demo[

<button type="button" onclick="window.alert('(smh) DO NOT GIVE USERS SEIZURES!!')">Click to Have a Seizure</button>

]

???

"Does anyone in here have issues with seizures... rapidly flashing colors, anything like that?"

(click it)

Well, you can imagine. Flashing stuff. Myspace circa 2000.




---
class: inverse

## **Good Idea:** Keep expandable content links where they are.

.demo[

<button aria-expanded="false" aria-owns="more_content_1" type="button" onclick="$.fn.toggleAttr = function (attr, value1, value2) {return this.each(function () { var self; self = $(this); if (self.attr(attr) === value1) { self.attr(attr, value2); } else { self.attr(attr, value1); }});}; $(this).toggleAttr('aria-expanded', 'true', 'false'); $('#more_content_1').toggleClass('hidden');">Bibendum Fermentum Aenean</button>
<div id="more_content_1" class="hidden">
	<h3>Bibendum Fermentum Aenean</h3>
	<p>Donec id elit non mi porta gravida at eget metus. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</p>
</div>

]


???

Okay, so this is a poorly-styled accordion.
When we drop these down, screen readers have to go backwards. Also, note the lack of "More/Less" text.


---
class: inverse

## _Bad Idea:_ Move expandable links to the bottom of the content.

.demo[

<div id="more_content_2" class="hidden">
	<h3 class="marginless">Bibendum Fermentum Aenean</h3>
	<p>Donec id elit non mi porta gravida at eget metus. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</p>
</div>
<button aria-expanded="false" aria-owns="more_content_2" type="button" onclick="$.fn.toggleAttr = function (attr, value1, value2) {return this.each(function () { var self; self = $(this); if (self.attr(attr) === value1) { self.attr(attr, value2); } else { self.attr(attr, value1); }});}; $(this).toggleAttr('aria-expanded', 'true', 'false'); $('#more_content_2').toggleClass('hidden');">Bibendum Fermentum Aenean</button>

]


???

Okay, so this is a poorly-styled accordion.
When we drop these down, screen readers have to go backwards. Also, note the lack of "More/Less" text.


---
class: middle inverse

## **Good Idea:** Keep Modals/Pop Ups Simple

???

NVDA doesn't treat modals very well. They intentionally don't allow users to navigate through them element by element, so it's up to us to read the entire modal to the user when it pops up. After that, the user has to rely on browser-based navigation in order to actually manipulate it.
This means that we can do simple things that work well, but taking complicated portions of a webpage and sticking them in a pop-up is a bad idea.




---
class: middle inverse

## _Bad Idea:_ Scrollable Areas

In general, screen readers are not very good at coping with these areas. Sometimes

.demo.scrollable_content[

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

]

???

Alright, so this doesn't relate too directly, but it's especially true in modals.


Similarly, a bad idea is Locking Scroll. Scroll down, take it over, force the page up... that kind of thing.





---
class: middle inverse

## **Good Idea:** Prototype Non-traditional UI

_Preferably before selling it?_

Some already-made components: [W3 - WAI-ARIA Patterns](http://www.w3.org/TR/wai-aria-practices/#aria_ex)

(Not all of these work well, though!)

???

There are a ton of ideas out there that we may or may not be able to pull off. It's unfortunate when you have to revamp design later in a project and change functional requirements.









---
class: middle inverse

## _Bad Idea:_ Styling Overrides of Radio Buttons and Checkboxes

???

This just doesn't work well at all for iOS users that are trying to hover over something.

That being said, I doubt you'll _not_ do it. Personally, I'm looking into alternative means. Defaults are just ugly, aren't they?


---
class: middle inverse

## **Good Idea:** Prefix Error Messages with "Error"

And reference the field that has the error.

<form class="demo">
	<div class="field">
		<div class="label_container">
			<label class="label" for="error_message_prefix_input_1">Name</label>
		</div>
		<div class="input_container">
			<input class="input" type="text" id="error_message_prefix_input_1" aria-describedby="error_message_prefix_error_input_1" placeholder="*@$###">
		</div>
		<div class="error" id="error_message_prefix_error_input_1">
			<img src="/assets/images/presentations/error_icon.svg" alt="Error" class="error_icon">
			Wow. You Messed Up Your Name. Please don't use symbols in the Name field.
		</div>
	</div>
</form>


???

_And other related helpful explanations of what things are_



---
class: middle inverse


## **Good Idea:** Skip To Link

- jumping past redundant elements and navigation, etc.
	— screen readers already have this ability. At this point, it's mainly for keyboard users, so making the link visible when it's focused is a good idea



---
class: middle inverse

## _Bad Idea:_ Single Page Web Apps

- no true page loads
- lots of DOM mutation

???

At this point in time, the ideal screen reader experience is a page that has true separate page loads. Single page webapps make the experience less understandable, as page transitions can occur without the user being introduced to them.

When all of your page's content falls away, the user ends up at the bottom of the page.

We've tried to care for this a bit in our project, to varying degrees of success.

---
class: middle inverse

## _Bad Idea:_ Giving Elements an “Identity Crisis”

- compounding several different elements together into one
- changing element types on breakpoint

???

- I've seen a `select` turn into `radio` buttons once it hit a proper screen size
- I've seen the Menu in Fusion alter between breakpoints



---
class: center middle inverse

## Questions and Free-range Accessment

???

Open floor at this point. If anyone wants to ask anything, go for it. I'm sure this wasn't Everything you could know.

And if anyone has ideas for websites to go walk through, we can do that, too.


---
class: inverse

.left-column[
## Links
]

.right-column[

This presentation: [aminimalanimal.com](http://aminimalanimal.github.io/presentations/ux_accessibility/index.html)

- [WCAG 2.0](http://www.w3.org/TR/WCAG20/)
- [WebAIM: Using VoiceOver](http://webaim.org/articles/voiceover/)
- [W3 - WAI-ARIA Patterns](http://www.w3.org/TR/wai-aria-practices/#aria_ex)
- [MIT - UX Accessibility Guidelines](https://ux.mit.edu/accessibility/guidelines)
- [Aegis Personas](http://www.aegis-project.eu/index.php?option=com_content&view=article&id=63&Itemid=53)
- [A Web for Everyone - Personas](https://uxmag.com/articles/book-excerpt-a-web-for-everyone)

]