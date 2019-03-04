require 'json'

# == Schema Information
#
# Table name: users
#
#  id              :bigint(8)        not null, primary key
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  name            :string           not null
#  image_url       :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
  validates :email, :session_token, uniqueness: true, presence: true
  validates :name, :password_digest, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }
  after_initialize :ensure_session_token

  attr_reader :password

  has_many :friendships,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :Friend

  has_many :friends,
    through: :friendships,
    source: :friend

  has_many :user_bill_shares, dependent: :destroy

  has_many :bills,
    through: :user_bill_shares,
    source: :bill

  has_many :bills_paid,
    primary_key: :id,
    foreign_key: :payer_id,
    class_name: :Bill

  has_many :shares_paid,
    through: :bills_paid,
    source: :user_bill_shares
  
  has_many :created_bills,
    primary_key: :id,
    foreign_key: :creator_id,
    class_name: :Bill

  accepts_nested_attributes_for :friendships, :friends

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return nil unless user
    user.password_valid?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def password_valid?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom::urlsafe_base64
    self.save!
    self.session_token
  end

  def calculate_owed
    # balance_hash = Hash.new(0)
    # debugger
    balance_hash = {}

    self.shares_paid.each do |share|
      balance_hash[share.user_id] ||= { userId: share.user_id }
      balance_hash[share.user_id][:amount] ||= 0
      balance_hash[share.user_id][:amount] += share.amount
    end

    balance_hash
  end

  def calculate_owe
    # balance_hash = Hash.new(0)
    balance_hash = {}


    self.user_bill_shares.each do |share|
      balance_hash[share.bill.payer_id] ||= { userId: share.bill.payer_id }
      balance_hash[share.bill.payer_id][:amount] ||= 0
      balance_hash[share.bill.payer_id][:amount] += share.amount
      # balance_hash[share.bill.payer_id] += share.amount
    end

    balance_hash
  end

  def ensure_session_token
    self.session_token ||= SecureRandom::urlsafe_base64
  end
end
