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
  belongs_to :user
  
  belongs_to :friend,
    primary_key: :id,
    foreign_key: :friend_id,
    class_name: :User

end
