package com.cl.dao;

import com.cl.entity.ShuidianfeixinxiEntity;
import com.baomidou.mybatisplus.mapper.BaseMapper;
import java.util.List;
import java.util.Map;
import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.plugins.pagination.Pagination;

import org.apache.ibatis.annotations.Param;
import com.cl.entity.view.ShuidianfeixinxiView;


/**
 * 水电费信息
 * 
 * @author 
 * @email 
 * @date 2024-03-29 14:15:48
 */
public interface ShuidianfeixinxiDao extends BaseMapper<ShuidianfeixinxiEntity> {
	
	List<ShuidianfeixinxiView> selectListView(@Param("ew") Wrapper<ShuidianfeixinxiEntity> wrapper);

	List<ShuidianfeixinxiView> selectListView(Pagination page,@Param("ew") Wrapper<ShuidianfeixinxiEntity> wrapper);
	
	ShuidianfeixinxiView selectView(@Param("ew") Wrapper<ShuidianfeixinxiEntity> wrapper);
	

}
