#Gulp

###Install gulp globally
`npm install -g gulp`


###Install locally as a dev dependency as gulp is not used in production
npm install --save-dev gulp


###Install gulp-imagemin
`npm install --save-dev gulp-imagemin`
[gulp-imagemin](https://www.npmjs.com/package/gulp-imagemin)


##Errors

[Task did not complete](https://stackoverflow.com/questions/36897877/gulp-error-the-following-tasks-did-not-complete-did-you-forget-to-signal-async)
Use async function to overcome below error (Due to gulp v4)

`[14:47:48] The following tasks did not complete: default
[14:47:48] Did you forget to signal async completion?`
