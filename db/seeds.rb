# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all

liz = User.create(name: "Liz Lemon", email: "llemon@nbcuni.com", password: "password")
jack = User.create(email: "jdonaghy@nbcuni.com", name: "John Francis Donaghy", password: "password")
jenna = User.create(email: "jmaroney@nbcuni.com", name: "Jenna Maroney", password: "password")
kenneth = User.create(email: "kenneth@nbcuni.com", name: "Kenneth", password: "password")
tracy = User.create(email: "tjordan@nbcuni.com", name: "Tracy Jordan", password: "password")

Friend.delete_all

Friend.create(user_id: liz.id, friend_id: jack.id)
Friend.create(user_id: liz.id, friend_id: jenna.id)
Friend.create(user_id: jack.id, friend_id: liz.id)
Friend.create(user_id: liz.id, friend_id: kenneth.id)
Friend.create(user_id: liz.id, friend_id: tracy.id)