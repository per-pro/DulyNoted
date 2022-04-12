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

