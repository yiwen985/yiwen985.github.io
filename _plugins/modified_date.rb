# _plugins/modified_date.rb
# 自动将 date 赋值给 modified_date
# 在 _layouts\home.html 根据更新日期排序，在 _layouts\post.html 若日期一样不显示更新日期

Jekyll::Hooks.register :posts, :pre_render do |post|
    post.data['modified_date'] ||= post.data['date']
  end
