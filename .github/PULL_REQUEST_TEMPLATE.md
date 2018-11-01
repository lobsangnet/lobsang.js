# I am proposing some changes

Cool, so just to speed up the process, here are some checks:

1. Does the linting pass? `npm run lint`
2. Does the tests pass? `npm run test` + CircleCI agree with you
3. Is there a signoff? That is, did you `git commit -s`?
   If not, run `git rebase -i HEAD_OF_COMMIT_BEFORE_YOURS --signoff` to fix that

All done? Okay, let us came back to you :-)
