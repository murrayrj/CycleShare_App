class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
         :omniauthable, :omniauth_providers => [:facebook]
  has_many :bikes_as_owner, class_name: "Bike", foreign_key: "owner_id"
  has_many :bikes_as_renter, class_name: "Bike", foreign_key: "renter_id"
end