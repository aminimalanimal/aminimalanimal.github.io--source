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

## Intro to James

???

I'm a presentation layer engineer here at the Austin office. I've worked here for about two years on the {{client name}} account.


---

count: false
class: middle inverse
layout: false

## Intro to James' Client Account

???

{{Client name}} recently revamped their entire website. One of the driving factors behind the rewrite was to make it accessible.


---

count: false
class: middle inverse
layout: false

## Intro to James' Client Account's Fear

???

There is an increasing fear that the government will adopt an open-standards spec called the WCAG


---

count: false
class: middle inverse
layout: false

## Intro to James' Client Account's Fear of the WCAG 2.0

???

—that is, the Web content accessibility guidelines— 2.0 as it's official standard for compliance with the Americans with Disabilities Act



---

count: false
class: middle inverse
layout: false

## Intro to James' Client Account's Fear of the ADA

???

which passed in 1990. The ADA prevents discrimination based on disability, and in recent years many companies that have functionality deemed to be universal enough to be a public service—such as banks and airlines—have found themselves under pressure to offer their services and their websites to everyone,

---

count: false
class: middle inverse
layout: false

## Intro to James' Client Account's Fear of Being Sued

???

lest they be sued.

---

count: false
class: middle inverse
layout: false

## Intro to James again

???

So, my primary focus so far at Razorfish has been Web accessibility... but bear in mind that the takeaways here apply to everything.

---

count: false
class: middle inverse
layout: false

## Intro to Accessibility

???

The ADA is why we have handicapped parking spots, wheelchair ramps, Braille in elevators, walk signs that beep and talk to you. Our public spaces have adjusted their layout, their design, and their behavior in order to be more universally accessed.

---

count: false
class: middle inverse
layout: false

## Intro to Web Accessibility

???

The web is no different.



---

class: middle inverse
layout: false

## Intro to Web Accessibility: The Basics



---

class: middle inverse
layout: false

## Intro to Web Accessibility: The Basics: Our Users

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

???


We're already used to thinking about different users.

> slides for current user types

People from different backgrounds, with different skill sets, with different understandings of technology are all going to interface with your products in a slightly different manner. Skeumorphism was so popular for so long because it was believed that people needed an interface analogous to real world objects they were already accustomed to.

We already design for simple users in mind. We design for power users. We design for people who have too much time on their hands, and for people who have no patience.




---

.right-column[

### Blindness

- likely to use a screen reader
	- possible keyboard-only navigation
	- need labelled graphics
	- need semantic markup
- issues with understanding visual context and clues

]

--
count: false

.right-column[

### Low Vision

- may use screen readers
- may use zooming tools
- may use high contrast display modes
- issues with understanding visual context and clues

]

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

> Users with motor impairments are more likely to use only a mouse, only a keyboard, voice or other inputs to control and navigate the web.   Websites developed with flexibility of input options are more accessible to these individuals.  Requiring mouse-only or keyboard-only control will create a barrier for some of these individuals.

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

## The tenants of accessible design: POUR






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

- Audio content is captioned for those that cannot perceive the audio through hearing alone.
- Text alternatives are provided for non-text content.
- State changes—focus, interactions... you should be getting feedback

]

???

You need to make sure that users can perceive our website. They understand where they're focuses That they understand what elements are, they can see the dividing lines between things, that they understand when an error has taken place.
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

## _Sounds easy._


???


Now frankly, your client may not be a bank or an airline. Your client may not come to you with this as a concern. And when it's not part of the clients agenda, the concessions can be hard to sell.

And... look—I say concessions, and I mean it. If you're making an accessible website, you simply cannot do all of the things that you might have done if you weren't. So, there are concessions, however, many of those concessions lead to a more positive experience for everybody.

Creating a truly accessible website requires a lot of knowledge. Not just from your developers, or your testers, but right in the beginning as well—from the functional requirements, the information architecture, and the design itself.

And even without buy-in from a client, there are certainly several steps we can take in the right direction, and they begin with awareness.





---
class: middle, inverse
layout: false

## Introduction to the Tools




---

template: tools
class: inverse
layout: true

.left-column[

## Tools

]


---

.right-column[

###Desktop Screen Readers

- OS X VoiceOver
- NVDA (NonVisual Desktop Access)
- JAWS (Job Access With Speech)
- Window-Eyes
- ChromeVox

]



--
count: false

.right-column[

### Mobile Screen Readers

- iOS VoiceOver
- Google Talkback

]
















---
class: middle, inverse
layout: false

## A Screen Reader's Experience

- VoiceOver for OS X
	- `Command` + `F5`
	- can navigate from element to element
	- can navigate by element type
- VoiceOver for iOS
	- turn on in System Preferences
		- triple-tap to start
	- typically swiping from element to element
	- can also navigate by types of elements
	- can also point at elements

> insert a link to run through

???

NVDA and Talkback aren't terribly different from these two. NVDA gives the user the ability to hear items they're hovering over as well.





---
class: middle, inverse

### The Importance of a One to One Experience

???

Because we can interact with the page in so many ways, it's important that we structure the page in a manner that makes these interactions useful.

Everything ~important~ (non-decorative) you are able to see, you should be able hear, you should be able to reach out and touch it, hover over it (if supported), click on it (and navigate to it with keyboard alone) if it's actionable, etc.

Similarly, nearly everything you hear should have a visible on-page component that's related to it. An X icon may say "Close", an image may be described, a tooltip may say "Open tooltip" when these words aren't present on the page, but the user should understand what visible object is being read. We should not be hiding entire passages of text just for a screen reader, because, well, how likely are you to point at it and see it? There's no spirit realm here. We just want to make this stuff exist in nearly every percievable way it can.






---
class: middle, inverse

### Scanning: Landmarks and Headings

Users generally rely on headings and landmarks to scan the page.

- landmarks allow them to jump from area to area
- within these areas, it's best that the experience is linear





#### Types of Landmarks





#### How Heading Levels Work






---
class: middle, inverse

#### Skip To Link

- jumping past redundant elements and navigation, etc.
	— screen readers already have this ability. At this point, it's mainly for keyboard users, so making the link visible when it's focused is a good idea






---
class: middle, inverse

### The Importance of a Linear Experience

- element order, within a module/component, is arranged left-to-right top-to-bottom (assuming it's an English page).
- information that's necessary to the user should be presented in a logical and upfront manner. Close your eyes and walk through this. Did you have all the information you needed to have to make a sound judgement on whether or not to submit this form?
	- EXAMPLE: form with Terms and Conditions below the Submit button "your email address is optional. If you give us your email address, we will send you offers from our partners."






---
class: middle, inverse

## Staying Focused

- we always have to keep track of a user's focus
	- don't instantly place them on elements because they can miss information
		- EXAMPLE: instantly focused find field
	- no locking them on elements
		- EXAMPLE: a worse focused find field






---
class: middle, inverse

### Don't redirect focus

- EXAMPLE: three input fields for phone number






---
class: middle, inverse

### The Importance of Obvious Focus States

- focus states focus states focus states
	- embrace these. make them cool!








---
class: middle, inverse


## pushing the limits within the limits

### SPA difficulties

At this point in time, the ideal screen reader experience is a page that has true separate page loads.






---
class: middle, inverse

### responsive difficulties

https://medium.com/salesforce-ux/7-things-every-designer-needs-to-know-about-accessibility-64f105f0881b






---
class: middle, inverse

#### stray from Giving Elements Identity Crisis

- minor design changes could lead to changes in a user’s interaction model.
- thou shalt not switch input types - breaks our STAYING FOCUSED rule







---
class: middle, inverse

## Misc - for design

### Color Contrast
- there be standards for compliance
- your icons don't matter—actually, all that matters is text on a background
	- so this (pic of text on a crazy background) is bad






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
##### Tooltips

- multiple constraints:
	- we can either treat these as modals
	- or have them read immediately





---
class: middle, inverse
### Tables

so tricky.




---
class: middle, inverse
### Dropdown Menus





---
class: middle, inverse

### Modals




---
class: middle, inverse

### Expandable Content

- it's best to keep the button that expands content 





---
class: middle, inverse

### Show More...

- ick




---
class: middle, inverse

### Replaceable content

