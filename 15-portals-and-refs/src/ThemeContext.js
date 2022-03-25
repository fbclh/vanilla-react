/*
 * Context is like state, but instead of being confined to a component, it's global to your application.
 * It's application-level state. This is dangerous. Avoid using context until you have to use it. One of React's primary benefit is it makes the flow of data obvious by being explicit. This can make it cumbersome at times but it's worth it because your code stays legible and understandable. Things like context obscure it.
 * Context (mostly) replaces Redux. Well, typically. It fills the same need as Redux. I really can't see why you would need to use both. Use one or the other.
*/

import { createContext } from "react";

const ThemeContext = createContext(["green", () => {}]);

export default ThemeContext;
