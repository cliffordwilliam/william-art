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

# create page POST UI

read: https://ui.shadcn.com/docs/components/form

add the isSubmitting and the isValid from the form.formState

add the disabled to the input tag - also the is valid to the submit button

add a button to go back to the artist/arts

# axios

use axios to try to POST -> deliberately cause error -> /api/art

# react-hot-toast

use react hot toast to show the error

read: https://react-hot-toast.com

need to create a provider to use inside a comp dir create providers dir

this does not auto complete, need to destruct Toaster from react-hot-toast

add provider as child sibling to the root layout

then just import toast.error or success in place of console.log

# setup prisma

get client

```bash
npm i -D prisma
```

init

```bash
npx prisma init
```

new things:

- updated .env -> change the connection string with the supabase URI / elephantSQL here
- new schema.prisma file -> write your models here

get client

```bash
npm i @prisma/client
```

need to create the client to return the db (db will be based on the schema) -> create the db.ts in the lib dir

create a new prisma instance from PrismaClient

declare a global for a var that will store the prisma instance (type is PrismaClient or undefined)

set it to db and check if the global var alr have it? if not then create new instance

then check if not in prod, then set the global to the db

go to supabase and create new acc -> later go here DO NOT CLICK USE AS REF: https://supabase.com/dashboard/project/.../settings/database

# setup simple model to test generate and push -> landlord/server provider

install the prisma extention to have syntax in .prisma file for model defs

generate locally -> update db/prisma prop

```bash
npx prisma generate
```

push -> to provider/landlord

```bash
npx prisma db push
```

if you make changes always do generate and push -> turn off the app first and everything else

if you have data alr, and you update -> ALL DATA IS LOST -> but update will work

now create the /api/art route

if success, can check the data here

```bash
npx prisma studio
```

this thing runs on port 5555 for me, you refresh this whenever you edit the db -> it basically acts as UI for your db

if you use supabase just see it from your dashboard

# on success navigate to a new page -> artId edit page

that page is server - will have many client comp to do PATCH -> on OK they will redirect to server page again forcing a refetch of new updated data

# complete the model

if you alr have data and you add a new col like updated at and use the @updatedat then it wont work, data need to be purged then this can be done

# creating the edit page UI

here you fetch the data using id

SERVER page so use db

whenever you use db, check if got user? then check if data is there

prepare a grid to make room for each CLIENT PATCH forms comps

padd the art into the CLIENT comps

# create the edit title UI form

CLIENT

same as the one you made, follow this again

read: https://ui.shadcn.com/docs/components/form

or you can just copy from the title one

# create API PATCH -> reusable for all
