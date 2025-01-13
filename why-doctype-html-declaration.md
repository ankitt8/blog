# Why do we write `<!DOCTYPE html>` at top of html files

When browsing the **Elements Tab** in your browser's devtool, you may have noticed `<!DOCTYPE html>` at the top of many html documents. **But why is it there, Let's break it down**.


**Did you ever thought how browser's understand the `HTML` syntax??**

- before **HTML:5** (introduced in 2014), the `DOCTYPE` declaration was more complex. For example in **HTML4.01** you might see like this 
> `<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">`
- Here's what's happening
  - At the end of declaration there is a reference to [http://www.w3.org/TR/html4/strict.dtd]()
  - This **DTD (DOCUMENT TYPE DEFINITION)**  file defines the rules for how the browser should parse and validate the HTML document.

**What changed with HTML5?**

With launch of `HTML:5` the complex `<!DOCTYPE HTML PUBLIC blablbla **.dtd` declaration was replaced with
`<!DOCTYPE html>`.
-  so now a normal thought would come from where will browser reference the rules to parse and validate html?
- with latest `HTML:5` the html5 spec is embedded in browser's rendering engine itself
- so we need not specify any **DTD** file as we used to with previous version of HTML5

**So now we are clear how browsers understand to parse and validate html :rocket: 
and understand the importance of including `<!DOCTYPE html>` in all html files at the top.** 

You tell me and I accept , NOOOO ;) I personally question everything :)

### So what will happen if we don't include `<!DOCTYPE html>`
- if you are with me till now, answer is clear  browser will not understand clearly the rules to parse html.
- You are partially correct, today's modern browsers do know how to parse html without `<!DOCTYPE html>`
- But there can be issues for e.g below are 2 examples
  - [https://ankitt8.github.io/vanillajs/withdoctype]() With `<!DOCTYPE html>` implies browser is rendering in Standard Mode.
  - [https://ankitt8.github.io/vanillajs/withoutdoctype]() without `<!DOCTYPE html>`implies browser is rendering in Quirks Mode.
- **Did you notice the difference**
  - If you inspect and hover mouse over text, whole page height comes
  - there is spacing difference at the top of text
  - The text appears different
- Above example hence proves, unintentional things happen in **Quirks mode** rendering aka without `<!DOCTYPE html>` 
- Internet says there can be other differences like in standard mode i.e with `<!DOCTYPE html>`, the box-sizing property is by default content-box in standard mode, but it can be border-box in quirks mode (though I tried it's not the case), etc

### Thanks for reading hope you learnt something new :)








