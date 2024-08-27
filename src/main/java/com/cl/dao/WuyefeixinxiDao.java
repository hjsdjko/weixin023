package com.cl.dao;

import com.cl.entity.WuyefeixinxiEntity;
import com.baomidou.mybatisplus.mapper.BaseMapper;
import java.util.List;
import java.util.Map;
import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.plugins.pagination.Pagination;

import org.apache.ibatis.annotations.Param;
import com.cl.entity.view.WuyefeixinxiView;


/**
 * 物业费信息
 * 
 * @author 
 * @email 
 * @date 2024-03-29 14:15:48
 */
public interface WuyefeixinxiDao extends BaseMapper<WuyefeixinxiEntity> {
	
	List<WuyefeixinxiView> selectListView(@Param("ew") Wrapper<WuyefeixinxiEntity> wrapper);

	List<WuyefeixinxiView> selectListView(Pagination page,@Param("ew") Wrapper<WuyefeixinxiEntity> wrapper);
	
	WuyefeixinxiView selectView(@Param("ew") Wrapper<WuyefeixinxiEntity> wrapper);
	

}
