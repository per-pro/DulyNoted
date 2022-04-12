# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# make sure I get the class names right
# class names are models

require 'open-uri'

Author.destroy_all
Comment.destroy_all
Text.destroy_all
User.destroy_all

# Authors
spinoza = Author.create({ name: "Benedict de Spinoza", alive: false, birth_date: 1677, category: "philosopher", created_at: 2022, updated_at: 2022, death_date: 1677, description: "Wrote a book of ethics 'more geometrico'" })
kant = Author.create({ name: "Immanuel Kant", alive: false, birth_date: 1724, category: "philosopher", created_at: 2022, updated_at: 2022, death_date: 1804, description: "Was awoken from his dogmatic slumber by Hume" })
fichte = Author.create({ name: "Johann Fichte", alive: false, birth_date: 1762, category: "philosopher", created_at: 2022, updated_at: 2022, death_date: 1814, description: "Made fun of tartes a la creme" })
schelling = Author.create({ name: "Friedrich Schelling", alive: false, birth_date: 1775, category: "philosopher", created_at: 2022, updated_at: 2022, death_date: 1854, description: "Called to Berlin to purge the dragon seed of Hegelian pantheism" })
maimon = Author.create({ name: "Salomon Maimon", alive: false, birth_date: 1753, category: "philosopher", created_at: 2022, updated_at: 2022, death_date: 1800, description: "Developed a coalition system of philosophers he agreed with" })
hegel = Author.create({ name: "Georg Hegel", alive: false, birth_date: 1770, category: "philosopher", created_at: 2022, updated_at: 2022, death_date: 1831, description: "Thought that slime was cooler than the night sky" })
marx = Author.create({ name: "Karl Marx", alive: false, birth_date: 1818, category, created_at: 2022, updated_at: 2022, death_date: 1883, description: "Made the bourgeoisie pay for his carbuncles" })
lenin = Author.create({ name: "Vladimir Lenin", alive: false, birth_date: 1870, category: "revolutionary", created_at: 2022, updated_at: 2022, death_date: 1924, description: "Started the 3rd International" })
freud = Author.create({ name: "Sigmund Freud", alive: false, birth_date: 1856, category: "analyst", created_at: 2022, updated_at: 2022, death_date: 1939, description: "Proposed a radical notion: actually listening to women" })
trotsky = Author.create({ name: "Leon Trotsky", alive: false, birth_date: 1879, category: "revolutionary", created_at: 2022, updated_at: 2022, death_date: 1940, description: "Started the 4th International" })
foucault = Author.create({ name, alive, birth_date, category, created_at: 2022, updated_at: 2022, death_date, description })
marcuse = Author.create({ name, alive, birth_date, category, created_at: 2022, updated_at: 2022, death_date, description })
ilyenkov = Author.create({ name, alive, birth_date, category, created_at: 2022, updated_at: 2022, death_date, description })
rose = Author.create({ name, alive, birth_date, category, created_at: 2022, updated_at: 2022, death_date, description })
chitty = Author.create({ name, alive, birth_date, category, created_at: 2022, updated_at: 2022, death_date, description })
zukofsky = Author.create({ name, alive, birth_date, category, created_at: 2022, updated_at: 2022, death_date, description })
metcalfe = Author.create({ name, alive, birth_date, category, created_at: 2022, updated_at: 2022, death_date, description })
ducasse = Author.create({ name, alive, birth_date, category, created_at: 2022, updated_at: 2022, death_date, description })
# ok_go = Artist.create({ name: 'OK Go', bio: "Formed in Chicago in 1998, OK Go; Damian Kulash, Dan Konopka, Timothy Nordwind, and Andy Ross, is an indie alternative rock band, known for their eye-catching, low-budget music videos.

# In 2002, as Damian Kulash, Timothy Nordwind, Dan Konopka, and Andy Duncan, they released their self-titled debut, to generally positive claim, and has since attained a cult following among fans and critics alike.

# In 2005, as Andy Duncan left, “Oh No” was released to more positive reviews, as Andy Ross joined, and “Here It Goes Again” reached #38 on the Billboard Hot 100."})