/*
 Circular dependencies

 A tricky subject in dependency management is circular dependencies, where
 module A depends on B, and B also depends on A. Many module systems simply
 forbid this. CommonJS modules allow a limited form: it works as long as the
 modules do not replace their default exports object with another value and
 start accessing each other’s interface only after they finish loading.

 Can you think of a way in which support for this feature could be implemented?
 Look back to the definition of require and consider what the function would
 have to do to allow this.
 */
