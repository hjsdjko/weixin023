package com.cl.service;

import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.service.IService;
import com.cl.utils.PageUtils;
import com.cl.entity.DiscussshequhuodongEntity;
import java.util.List;
import java.util.Map;
import org.apache.ibatis.annotations.Param;
import com.cl.entity.view.DiscussshequhuodongView;


/**
 * 社区活动评论表
 *
 * @author 
 * @email 
 * @date 2024-03-29 14:15:49
 */
public interface DiscussshequhuodongService extends IService<DiscussshequhuodongEntity> {

    PageUtils queryPage(Map<String, Object> params);
    
   	List<DiscussshequhuodongView> selectListView(Wrapper<DiscussshequhuodongEntity> wrapper);
   	
   	DiscussshequhuodongView selectView(@Param("ew") Wrapper<DiscussshequhuodongEntity> wrapper);
   	
   	PageUtils queryPage(Map<String, Object> params,Wrapper<DiscussshequhuodongEntity> wrapper);
   	

}

