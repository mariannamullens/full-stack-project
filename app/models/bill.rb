# == Schema Information
#
# Table name: bills
#
#  id          :bigint(8)        not null, primary key
#  creator_id  :integer          not null
#  description :string           not null
#  note        :text
#  payer_id    :integer          not null
#  amount      :decimal(16, 2)   not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Bill < ApplicationRecord
  validates :description, :amount, presence: true

  has_many :user_bill_shares, dependent: :destroy

  has_many :users,
    through: :user_bill_shares,
    source: :user
  
  accepts_nested_attributes_for :users, :user_bill_shares

end
