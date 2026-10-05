<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Application architecture
- Keep dashboard presentation in reusable IoTernak components and thin TanStack content routes, so navigation and metadata stay independent.
- Keep mock livestock data and RFID transport contracts browser-safe and separate from UI; replace the transport with API integration later without changing verification presentation.
- Share session-only mock animal and activity mutations through LivestockProvider, so verification history and animal details remain consistent without implying persistent storage.
- Keep filter and search state in validated route search parameters for shareable list views.
