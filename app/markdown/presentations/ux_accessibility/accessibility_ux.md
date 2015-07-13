class: center, middle, inverse

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

which passed in 1990. The ADA prevents discrimination based on disability, and in recent years many companies that have functionality deemed to be universal enough to be a public service—such as banks and airlines—have found themselves under pressure to offer their services and their websites to everyone,

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
class: middle, inverse
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

> find link to demonstrate

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

So, this would be read h1 > h2 > h3> h4> h5> h6 > back up to the second h3 and back down again.



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

> We thought it'd be really cool to start them out in the search field and then not let them leave, 'cause the whole point is just filtering search results, right? **Super Convenient UX!**


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
				<input class="awful_focus_management_example input" type="text" id="awful_focus_management_example_input_1" maxlength="3" onKeyup="var t = event.target; if (t.value.length >= 3) {t.nextSibling.nextElementSibling.focus();}">
				<input class="awful_focus_management_example input" type="text" id="awful_focus_management_example_input_2" maxlength="3" onKeyup="var t = event.target; if (t.value.length >= 3) {t.nextSibling.nextElementSibling.focus();}">
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
class: center middle inverse


## _Pushing the limits *within the limits*_


???

### SPA difficulties

At this point in time, the ideal screen reader experience is a page that has true separate page loads.






---
class: middle, inverse

### Responsive Difficulties

[7 Things every designer should know](https://medium.com/salesforce-ux/7-things-every-designer-needs-to-know-about-accessibility-64f105f0881b)

#### Stray from Giving Elements Identity Crisis

- minor design changes could lead to changes in a user’s interaction model.
- thou shalt not switch input types - breaks our STAYING FOCUSED rule







---
class: middle, inverse

## Visual Design

### Color Contrast
- there be standards for compliance
	- your icons don't matter—actually, all that matters is text on a background

> look these up



.poor_contrast[

Example of poor color contrast

]






---
class: middle, inverse

## Prototyping

Prototyping accessibility for the web requires knowledge of established patterns. Anything new requires testing.






---
class: middle, inverse

## Component Patterns for the Web

http://www.w3.org/TR/wai-aria-practices/#aria_ex






---
class: middle, inverse

### Forms

- where to place important information
- the expectation of being able to tab through an entire form
- creating related content
	- fieldsets and how they sound






---
class: middle, inverse

#### Input types

### Radios and checkboxes

Issues with overlaying native elements
- try selecting this radio button/checkbox by hovering over it




---
class: middle, inverse

##### Naming Conventions
##### Error Messaging




---
class: middle inverse


## **Good Idea:** Skip To Link

- jumping past redundant elements and navigation, etc.
	— screen readers already have this ability. At this point, it's mainly for keyboard users, so making the link visible when it's focused is a good idea


