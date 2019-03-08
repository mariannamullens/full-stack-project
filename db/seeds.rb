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

Bill.delete_all

bill1 = Bill.create(creator_id: liz.id, description: "carp po boy with extra chuckle", payer_id: jack.id, amount: 15.00)
bill2 = Bill.create(creator_id: jack.id, description: "decorative air holders", note: "for 100 episodes and an emmy...magazine cover story", payer_id: jack.id, amount: 15.00)
bill3 = Bill.create(creator_id: liz.id, description: "3 bear costumes", payer_id: kenneth.id, amount: 100.00)
bill4 = Bill.create(creator_id: liz.id, description: "subway fare to taxi dispatch", payer_id: liz.id, amount: 100.00)
bill5 = Bill.create(creator_id: tracy.id, description: "fcc violations", note: "I guess FCC stands for Federal Bunch of Sticklers", payer_id: liz.id, amount: 5000.00)

UserBillShare.delete_all

UserBillShare.create(user_id: liz.id, bill_id: bill1.id, amount: 7.50)
UserBillShare.create(user_id: jack.id, bill_id: bill1.id, amount: 7.50)
UserBillShare.create(user_id: liz.id, bill_id: bill2.id, amount: 15.00)
UserBillShare.create(user_id: liz.id, bill_id: bill3.id, amount: 100.00)
UserBillShare.create(user_id: liz.id, bill_id: bill4.id, amount: 50.00)
UserBillShare.create(user_id: kenneth.id, bill_id: bill4.id, amount: 50.00)
UserBillShare.create(user_id: tracy.id, bill_id: bill5.id, amount: 5000.00)