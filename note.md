# nodejs

https://nodejs.org/en

lts

npm package manager

# git

https://gitforwindows.org

makes sure that the git bash is there

# vscode

https://code.visualstudio.com

Explorer: Compact Folders

disbale sticky scroll

ctrl shift p -> dark mode abyss

# next + shad

https://ui.shadcn.com/docs/installation/next

# format on save

go to a tsx

ctrl + shift + p

format document

then setting format on save

install prettier

ctrl shift p again

select prettier for formatter

# clerk

https://clerk.com

login -> crate new app -> read doc

go to docs references nextjs custom sign in / up pages

put them in (auth)

create layout to center them

but first need to make the html,body:root to take height 100%

# setup fe routes

(dashboard) -> side bar + navbar + main layout
(auth) -> center layout

turn the root page into dashboard page

(auth)

- sign-in
- sign-up

(private)

- search -> search + buy
- dashboard -> see bought arts -> ROOT
- artist
  - arts -> see your created arts
  - analytics -> see your art sales

# setup private layout

comp:

- sidebar -> change items with pathname
- navabr -> change items with pathname

on pc

sidebar | navabr
| main

on mobile

navbar -> burger toggle sidebar
main

# setup sidebar

comp:

- Logo - so if u wanna change just change it here, reusable
- SidebarLinksList - CLIENT (maps arr of obj based on pathname -> noraml menu or artist menu?)
- SidebarLinkItem - CLIENT (am i active based on pathname? set style -> color it blue)

do not add padding to logo, so that it is flexible

```tsx
<div className="p-6">
  <Logo />
</div>
```

# SidebarLinksList

the arr of obj should have the name, href and the icon -> the icon is stright from the lucide react

map and pass the name href and icon to the SidebarLinkItem -> use Icon key for the LucideIcon real icon value -> so can use the Icon as tags later

# SidebarLinkItem

make a button that has a span and the icon to its right

now use usePathname to check

use cn to dynamic style overrides

```tsx
pathname === href || pathname?.startsWith(`${href}/`);
```

- my href is same as path? active
- my href is somewhere in path as PARENT? active

# Navabr

do later but:

- show / hide things based on pathname also (search input? button kick to artist/... ? button to kick to /...)

# mobile hide/show sidebar

MobileSidebar:

- shadcn sheet
- shadcd sheet trigger (burger) -> style it here to be hidden in md
- insert the Sidebar comp in the sheet content

# navbar

- NavbarLinksItem -> CLIENT (maps arr of obj based on pathname -> noraml menu or artist menu?) -> artist btn or the market btn
  - this lets you switch access -> to the first items is base route (art ive bought) or the artist route (arts / my arts)

create a NavbarLinksList -> margin left auto

# ui POST art

artist/create page

the way artist make new art is from their list of arts (my creation / created arts)

all of the arts that that artist have made will be displayed on that page in shadcn data table

there will be an add art button there -> kick to create art page

the only way you can enter the create page is from the arts page (my created arts page)
