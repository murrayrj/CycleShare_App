# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Bike.create(postcode: 'SE163UA', description: 'Specialized Road Bike', status: 'available')
Bike.create(postcode: 'SE173UE', description: 'Brompton EC1', status: 'rented')
Bike.create(postcode: 'E15JL', description: 'Racing Bike', status: 'rented')
Bike.create(postcode: 'SW1X7YL', description: 'MTB', status: 'available')
Bike.create(postcode: 'WC1A2BP', description: 'Fixie Bike', status: 'available')
Bike.create(postcode: 'WC2H7RD', description: 'Penny Farthing', status: 'unavailable')
Bike.create(postcode: 'EC2A1XD', description: 'Folding Bike', status: 'available')
Bike.create(postcode: 'EC3M5DY', description: 'Ladies City Bike', status: 'available')
Bike.create(postcode: 'EC1A1PP', description: 'BMX bike', status: 'available')
Bike.create(postcode: 'EC4M9BW', description: 'Tandem Bike', status: 'rented')