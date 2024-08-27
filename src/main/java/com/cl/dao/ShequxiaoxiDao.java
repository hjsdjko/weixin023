package com.cl.dao;

import com.cl.entity.ShequxiaoxiEntity;
import com.baomidou.mybatisplus.mapper.BaseMapper;
import java.util.List;
import java.util.Map;
import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.plugins.pagination.Pagination;

import org.apache.ibatis.annotations.Param;
import com.cl.entity.view.ShequxiaoxiView;


/**
 * 社区消息
 * 
 * @author 
 * @email 
 * @date 2024-03-29 14:15:48
 */
public interface ShequxiaoxiDao extends BaseMapper<ShequxiaoxiEntity> {
	
	List<ShequxiaoxiView> selectListView(@Param("ew") Wrapper<ShequxiaoxiEntity> wrapper);

	List<ShequxiaoxiView> selectListView(Pagination page,@Param("ew") Wrapper<ShequxiaoxiEntity> wrapper);
	
	ShequxiaoxiView selectView(@Param("ew") Wrapper<ShequxiaoxiEntity> wrapper);
	

}
