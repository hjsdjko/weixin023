package com.cl.dao;

import com.cl.entity.DiscussshequhuodongEntity;
import com.baomidou.mybatisplus.mapper.BaseMapper;
import java.util.List;
import java.util.Map;
import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.plugins.pagination.Pagination;

import org.apache.ibatis.annotations.Param;
import com.cl.entity.view.DiscussshequhuodongView;


/**
 * 社区活动评论表
 * 
 * @author 
 * @email 
 * @date 2024-03-29 14:15:49
 */
public interface DiscussshequhuodongDao extends BaseMapper<DiscussshequhuodongEntity> {
	
	List<DiscussshequhuodongView> selectListView(@Param("ew") Wrapper<DiscussshequhuodongEntity> wrapper);

	List<DiscussshequhuodongView> selectListView(Pagination page,@Param("ew") Wrapper<DiscussshequhuodongEntity> wrapper);
	
	DiscussshequhuodongView selectView(@Param("ew") Wrapper<DiscussshequhuodongEntity> wrapper);
	

}
