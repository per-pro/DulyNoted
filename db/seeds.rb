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
proclus = Author.create({ name: "Proclus the Successor", alive: false, birth_date: 410, category: "philosopher", created_at: 2022, updated_at: 2022, death_date: 485, description: "Described a progression-return dialectic that would later become the basis of the Christian doctrine of the Trinity" })
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
zukofsky = Author.create({ name: "Louis Zukofsky", alive: false, birth_date: 1904, category: "poet", created_at: 2022, updated_at: 2022, death_date: 1978, description: "Modernist poet who was a Marxist as a young man and claimed reading Rise and Fall of the Roman Empire changed his mind" })
marcuse = Author.create({ name: "Herbert Marcuse", alive: false, birth_date: 1898, category: "philosopher", created_at: 2022, updated_at: 2022, death_date: 1979, description: "Worked for the OSS and inspired the 68 hippies" })
ilyenkov = Author.create({ name: "Evald Ilyenkov", alive: false, birth_date: 1924, category: "philosopher", created_at: 2022, updated_at: 2022, death_date: 1979, description: "Developed a Hegelian-Marxism that was considered heretical by the USSR" })
foucault = Author.create({ name: "Michel Foucault", alive: false, birth_date: 1926, category: "genealogist", created_at: 2022, updated_at: 2022, death_date: 1984, description: "Described contemporary forms of power as implementations of Bentham's Panopticon" })
rose = Author.create({ name: "Gillian Rose", alive: false, birth_date: 1947, category: "philosopher", created_at: 2022, updated_at: 2022, death_date: 1995, description: "Defended the concept of speculation against its critics" })
firestone = Author.create({ name: "Shulamith Firestone", alive: false, birth_date: 1945, category: "feminist", created_at: 2022, updated_at: 2022, death_date: 2012, description: "Went from Orthodox Judaism to radical materialist feminism" })
chitty = Author.create({ name: "Christopher Chitty", alive: false, birth_date: 1983, category: "genealogist", created_at: 2022, updated_at: 2022, death_date: 2015, description: "Synthesized Marxism and gay liberation" })
metcalfe = Author.create({ name: "Xandra Metcalfe", alive: true, birth_date: 1990, category: "revolutionary, musician", created_at: 2022, updated_at: 2022, death_date: null, description: "A psychoanalytic communist and noise artist based in Melbourne, Australia." })
ducasse = Author.create({ name: "Isidore Ducasse", alive: false, birth_date: 1846, category: "poet", created_at: 2022, updated_at: 2022, death_date: 1870, description: "Wrote a series of songs about evil and later turned towards setting out positive ethical maxims" })

# Texts

manifesto = Text.create({ title: "The Communist Manifesto",
                            source: "pamphlet",
                            content: " A spectre is haunting Europe — the spectre of communism. All the powers of old Europe have entered into a holy alliance to exorcise this spectre: Pope and Tsar, Metternich and Guizot, French Radicals and German police-spies.

                            Where is the party in opposition that has not been decried as communistic by its opponents in power? Where is the opposition that has not hurled back the branding reproach of communism, against the more advanced opposition parties, as well as against its reactionary adversaries?
                            
                            Two things result from this fact:
                            
                            I. Communism is already acknowledged by all European powers to be itself a power.
                            
                            II. It is high time that Communists should openly, in the face of the whole world, publish their views, their aims, their tendencies, and meet this nursery tale of the Spectre of Communism with a manifesto of the party itself.
                            
                            To this end, Communists of various nationalities have assembled in London and sketched the following manifesto, to be published in the English, French, German, Italian, Flemish and Danish languages... "
                            author_id: marx.id})

three_essays = Text.create({ title: "Three Essays on the Theory of Sexuality",
                            source: "Standard Edition of the Complete Psychological Works of Sigmund Freud",
                            content: "...Experience of the cases that are considered abnormal has shown us that in them the sexual instinct and the sexual object are merely soldered together
                            —a fact which we have been in danger of overlooking in consequence of the uniformity of the normal picture, where the object appears to form part and
                            parcel of the instinct. We are thus warned to loosen the bond that exists in our thoughts between instinct and object. It seems probable that the sexual instinct is
                            in the first instance independent of its object; nor is its origin likely to be due to its object's attractions.... "
                            author_id: marx.id})

poesies = Text.create({     title: "Three Essays on the Theory of Sexuality",
                            source: "Standard Edition of the Complete Psychological Works of Sigmund Freud",
                            content: "...As long as my friends are still alive, I will not speak of death..... "
                            author_id: ducasse.id})