export function getHTML(count) {
  return `<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 3.2 Final//EN">
<html>
<head>
<title>Welcome to My Awesome Homepage!!!</title>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<style>
body {
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 20px;
}
.container {
  width: 800px;
  max-width: 100%;
}
</style>
</head>
<body bgcolor="#FFFFFF" text="#000000" link="#0000FF" vlink="#800080" alink="#FF0000">

<div class="container">
<center>

<table width="100%" border="0" cellpadding="0" cellspacing="0">
<tr>
<td bgcolor="#FF00FF">
<center>
<font size="+3" color="#FFFF00" face="Arial, Helvetica"><b>
*** WELCOME TO MY HOMEPAGE ***
</b></font>
</center>
</td>
</tr>
</table>

<br>

<table width="100%" border="3" cellpadding="10" cellspacing="0" bgcolor="#00FFFF">
<tr>
<td>
<center>
<img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExaGF6ZGN0YjB5aGZ1cnVjdWVoZ2k3MWJkMnQ4MjdlY2FsbGV5ZXRhMSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/njYrp176NQsHS/giphy.gif" alt="Gandalf welcomes you!" width="300" border="2">
<br>
<font size="2" face="Arial" color="#000080"><i>"A visitor is never late, nor is he early. He arrives precisely when he means to!"</i></font>
<br><br>
<img src="/counter.gif" alt="Visitor Counter" border="2">
<br>
<font size="-1" face="Arial"><b>You are visitor #${count}!</b></font>
</center>
</td>
</tr>
</table>

<br>

<table width="100%" border="5" cellpadding="15" cellspacing="0" bordercolor="#FF0000">
<tr>
<td bgcolor="#FFFF00">
<center>
<font size="+2" color="#FF0000" face="Comic Sans MS, Arial"><b>
<blink>*** UNDER CONSTRUCTION ***</blink>
</b></font>
<br>
<font size="+1">🚧 👷 🚧</font>
</center>
</td>
</tr>
</table>

<br>

<table width="100%" border="2" cellpadding="10" cellspacing="5" bgcolor="#CCCCCC">
<tr>
<td bgcolor="#FFFFFF">
<font face="Times New Roman" size="+1">
<center><b>About Me</b></center>
</font>
<hr size="3" color="#0000FF">
<font face="Arial" size="2">
Hi there! Welcome to my personal homepage on the World Wide Web!
My name is WebMaster3000 and I'm totally stoked you stopped by!
<br><br>
I created this site to share my interests with the world. 
Right now it's still under construction but check back soon for
updates!
<br><br>
<b>My Interests:</b>
<ul>
<li>Surfing the Information Superhighway 🌐
<li>Collecting cool GIFs and backgrounds
<li>HTML programming (I'm learning!)
<li>90s music and pop culture
<li>Making new friends online
<li>Lord of the Rings fan fiction
</ul>
</font>
</td>
</tr>
</table>

<br>

<table width="100%" border="0" cellpadding="8" cellspacing="0">
<tr>
<td bgcolor="#00FF00" width="33%" align="center">
<font face="Arial Black" size="3" color="#FF0000">
<a href="#cool"><font color="#0000FF"><b>Cool Links</b></font></a>
</font>
</td>
<td bgcolor="#FF00FF" width="34%" align="center">
<font face="Arial Black" size="3">
<a href="#guestbook"><font color="#FFFF00"><b>Guestbook</b></font></a>
</font>
</td>
<td bgcolor="#00FFFF" width="33%" align="center">
<font face="Arial Black" size="3">
<a href="#email"><font color="#FF0000"><b>Email Me!</b></font></a>
</font>
</td>
</tr>
</table>

<br>

<table width="100%" border="3" cellpadding="15" cellspacing="0" bgcolor="#FFFFCC">
<tr>
<td>
<a name="cool"></a>
<center>
<font face="Impact, Arial Black" size="+2" color="#0000FF">
<marquee behavior="alternate" width="80%">
✨ My Favorite Links ✨
</marquee>
</font>
</center>
<hr size="2" color="#FF00FF">
<font face="Verdana" size="2">
<ul>
<li><a href="https://web.archive.org">The Internet Archive</a> - Wayback Machine!
<li><a href="https://www.google.com">Yahoo!</a> - My favorite search engine
<li><a href="https://www.wikipedia.org">Online Encyclopedia</a> - Learn stuff!
<li><a href="https://www.lotr.com">Lord of the Rings Official Site</a> - One ring to rule them all!
<li><a href="#">My Friend's Homepage</a> - Check it out!
</ul>
</font>
</td>
</tr>
</table>

<br>

<table width="100%" border="3" cellpadding="10" cellspacing="0" bgcolor="#FF99CC">
<tr>
<td align="center">
<a name="guestbook"></a>
<font face="Comic Sans MS" size="+1" color="#000080">
<b>📖 Sign My Guestbook! 📖</b>
</font>
<br><br>
<font face="Arial" size="2">
Please sign my guestbook and let me know you were here!<br>
<i>(Guestbook coming soon!)</i>
</font>
</td>
</tr>
</table>

<br>

<table width="100%" border="5" cellpadding="10" cellspacing="0" bordercolor="#0000FF" bgcolor="#E0E0E0">
<tr>
<td>
<a name="email"></a>
<center>
<font face="Arial" size="+1" color="#FF0000">
<b>📧 Contact Me! 📧</b>
</font>
<br><br>
<font face="Courier" size="2">
Email: webmaster@coolsite.com<br>
ICQ: 12345678<br>
AIM: WebMaster3000
</font>
</center>
</td>
</tr>
</table>

<br>

<table width="100%" border="0" cellpadding="5" cellspacing="0" bgcolor="#000000">
<tr>
<td>
<center>
<font face="Arial" size="1" color="#00FF00">
Best viewed with Netscape Navigator 2.0 or higher<br>
800x600 resolution or better<br>
<br>
Last Updated: ${new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}<br>
<br>
<font color="#FFFFFF">Copyright © ${new Date().getFullYear()} WebMaster3000. All rights reserved.</font><br>
<br>
<font color="#FFFF00">
<blink>⭐ This site is best experienced with the sound ON! ⭐</blink>
</font>
</center>
</td>
</tr>
</table>

<br>

<font size="1">
<center>
<img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="88" height="31" alt="Netscape Now!" title="Netscape Now!">
<img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="88" height="31" alt="Best viewed in 800x600" title="Best viewed in 800x600">
<img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="88" height="31" alt="HTML 3.2" title="Made with HTML 3.2">
</center>
</font>

</center>
</div>

</body>
</html>`;
}
