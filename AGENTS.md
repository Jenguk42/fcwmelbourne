# FCWM website maintenance

- The production website is https://www.fcwmelbourne.org and is hosted by Sites.
- GitHub source repository: https://github.com/Jenguk42/fcwmelbourne (main branch).
- The user requests that every website addition or change also be committed to GitHub. Complete the Sites source/publishing workflow and sync the same source files to GitHub before reporting completion.
- Preserve existing GitHub history and CNAME. Do not force-push. Read the current GitHub branch before committing; preserve unrelated changes.
- Include source, dependency lockfile and build configuration. The user stores photos in R2 and requests that photos not be uploaded to GitHub. Preserve R2 URLs in source. Exclude dependencies, build output, temporary artifacts and secrets.
- Keep Korean and English content in sync. Run the build for website changes.
- If GitHub syncing is unavailable, report it explicitly; do not claim it completed.

- Keep image and video assets out of the Sites public directory and GitHub source mirror; use verified external R2 URLs. Preserve the optional Sites deployment thumbnail unless the user specifically requests its removal.
