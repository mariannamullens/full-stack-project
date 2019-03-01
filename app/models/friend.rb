# == Schema Information
#
# Table name: friends
#
#  id         :bigint(8)        not null, primary key
#  user_id    :integer          not null
#  friend_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Friend < ApplicationRecord
  validates :friend_id, uniqueness: { scope: :user_id, message: ": You are already friends." }
  validate :friend_is_not_user

  belongs_to :user
  
  belongs_to :friend,
    primary_key: :id,
    foreign_key: :friend_id,
    class_name: :User

  def friend_is_not_user
    if friend_id == user_id
      errors.add(:friend, ": You can't friend yourself")
    end
  end
end
