# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2022_09_12_181236) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "annotations", force: :cascade do |t|
    t.text "body", null: false
    t.integer "user_id", null: false
    t.integer "text_id", null: false
    t.integer "start_idx", null: false
    t.integer "end_idx", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["body"], name: "index_annotations_on_body"
    t.index ["end_idx"], name: "index_annotations_on_end_idx"
    t.index ["start_idx"], name: "index_annotations_on_start_idx"
    t.index ["text_id"], name: "index_annotations_on_text_id"
    t.index ["user_id"], name: "index_annotations_on_user_id"
  end

  create_table "authors", force: :cascade do |t|
    t.string "name", null: false
    t.boolean "alive", null: false
    t.string "category", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.text "description"
    t.integer "birth_date"
    t.integer "death_date"
    t.index ["name"], name: "index_authors_on_name"
  end

  create_table "changes", force: :cascade do |t|
  end

  create_table "comments", force: :cascade do |t|
    t.string "title", null: false
    t.string "content", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "author_id"
    t.index ["title"], name: "index_comments_on_title"
  end

  create_table "texts", force: :cascade do |t|
    t.string "title", null: false
    t.string "source", null: false
    t.string "content", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "author_id"
    t.index ["source"], name: "index_texts_on_source"
    t.index ["title"], name: "index_texts_on_title"
  end

  create_table "users", force: :cascade do |t|
    t.string "username", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["session_token"], name: "index_users_on_session_token"
    t.index ["username"], name: "index_users_on_username"
  end

end
